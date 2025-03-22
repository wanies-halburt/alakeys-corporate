import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  usernameSuggestions: [],
  error: null,

  // Register API
  signUp: async ({ email, password, userName, fullName, confirmPassword }) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`/api/register`, {
        email,
        password,
        userName,
        fullName,
        confirmPassword,
      });
      localStorage.setItem("alakeys-token", res?.data?.data.token);
      localStorage.setItem(
        "alakeys-user",
        JSON.stringify(res?.data?.data.user)
      );
      Cookies.set("alakeys-token", res?.data?.data.token, {
        expires: 7,
        sameSite: "Strict",
      });
      set({
        user: res?.data?.data.user,
        loading: false,
        token: res?.data?.data.token,
      });
      toast.success(
        res?.data?.message ??
          "Registeration successful, please check your email to complete signup"
      );
      return true;
    } catch (err) {
      toast.error(err.response.data?.message ?? "Failed to register user");
      set({
        error: err.response.data?.message || "Registration failed",
        loading: false,
      });
      return false;
    }
  },

  // Login API
  login: async ({ email, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`/api/login`, {
        email,
        password,
      });
      localStorage.setItem("alakeys-token", res.data.data.token);
      localStorage.setItem("alakeys-user", JSON.stringify(res.data.data.user));
      Cookies.set("alakeys-token", res?.data?.data.token, {
        expires: 7,
        sameSite: "Strict",
      });
      set({
        user: res.data.data.user,
        loading: false,
        token: res.data.data.token,
      });
      toast.success("Login successful");
      return true;
    } catch (err) {
      toast.error(err.response.data?.message ?? "Login Failed");
      set({
        error: err.response.data?.message || "Login failed",
        loading: false,
      });
      return false;
    }
  },
  verifyOtp: async ({ email, otp }) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`/api/verify-otp`, {
        email,
        otp,
      });
      localStorage.setItem("alakeys-token", res.data.data.token);
      localStorage.setItem("alakeys-user", JSON.stringify(res.data.data.user));
      Cookies.set("alakeys-token", res?.data?.data.token, {
        expires: 7,
        sameSite: "Strict",
      });
      set({
        user: res.data.data.user,
        loading: false,
        token: res.data.data.token,
      });
      toast.success(res.data.message ?? "Account verified");
      return true;
    } catch (err) {
      toast.error(err.response.data?.message ?? "verify otp failed");
      set({
        error: err.response.data?.message || "otp verification failed",
        loading: false,
      });
      return false;
    }
  },
  forgetPassword: async ({ email }) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`/api/forget-password`, {
        email,
      });
      set({
        loading: false,
      });
      toast.success(res.data.message ?? "OTP has been sent to your email");
      return true;
    } catch (err) {
      toast.error(err.response.data?.message ?? "an error occured");
      set({
        error: err.response.data?.message || "email verification failed",
        loading: false,
      });
      return false;
    }
  },
  resetPassword: async ({ email, otp, password, confirmPassword }) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`/api/reset-password`, {
        email,
        otp,
        password,
        confirmPassword,
      });
      set({
        loading: false,
      });
      toast.success(res.data.message ?? "Password has been reset");
      return true;
    } catch (err) {
      toast.error(err.response.data?.message ?? "an error occured");
      set({
        error: err.response.data?.message || "An error occurred",
        loading: false,
      });
      return false;
    }
  },

  loadFromStorage: () => {
    const token = localStorage.getItem("alakeys-token");
    const user = localStorage.getItem("alakeys-user");

    if (token && user) {
      set({ token, user: JSON.parse(user) });
    }
  },
  // Logout
  logout: () => {
    localStorage.removeItem("alakeys-user");
    Cookies.remove("alakeys-token");
    localStorage.removeItem("alakeys-token");
    set({ user: null, token: null });
    window.location.replace("/login");
  },
  setUserData: (data) => set({ user: data }),

  getUserProfile: async () => {
    set({ loading: true, error: null });
    const token = localStorage.getItem("alakeys-token");
    try {
      const res = await axios.get(`/api/get-user`, {
        headers: {
          authorization: `${token}`, // Assuming you're using a Bearer token
        },
      });
      set({
        user: res.data.data,
        loading: false,
      });
      localStorage.setItem("alakeys-user", JSON.stringify(res.data.data));
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
}));
