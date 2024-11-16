import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
import { BASE_URL } from "@/utils";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  usernameSuggestions: [],
  error: null,

  // Register API
  register: async (email, password, displayName, username) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/public/signup/basic-signup`, {
        email,
        password,
        displayName,
        username,
      });
      localStorage.setItem("tla-token", res?.data?.data.token);
      localStorage.setItem("tla-user", JSON.stringify(res?.data?.data.user));
      Cookies.set("tla-token", res?.data?.data.token, {
        expires: 7,
        sameSite: "Strict",
      });
      set({
        user: res?.data?.data.user,
        loading: false,
        token: res?.data?.data.token,
      });
      toast.success(
        "Registeration successful, please check your email to complete signup"
      );
      return true;
    } catch (err) {
      toast.error("Failed to register user");
      set({
        error: err.response?.data?.message || "Registration failed",
        loading: false,
      });
      return false;
    }
  },

  // Login API
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/public/login/basic-login`, {
        email,
        password,
      });
      console.log("res", res.data);
      localStorage.setItem("tla-token", res.data.data.token);
      localStorage.setItem("tla-user", JSON.stringify(res.data.data.user));
      Cookies.set("tla-token", res?.data?.data.token, {
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
      toast.error("Login Failed");
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
      return false;
    }
  },
  verifyUsername: async (username) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/public/utils/verify-username?username=${username}`
      );
      console.log("res", res.data.data?.isAvailable);
      return res?.data?.data?.isAvailable;
    } catch (err) {
      console.error(err);
    }
  },
  getUsernameSuggestion: async (displayName, email) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/public/utils/usernames?displayName=${displayName}&email=${email}`
      );
      set({ usernameSuggestions: res?.data?.data });
    } catch (err) {
      console.error(err);
    }
  },

  loadFromStorage: () => {
    const token = localStorage.getItem("tla-token");
    const user = localStorage.getItem("tla-user");

    if (token && user) {
      set({ token, user: JSON.parse(user) });
    }
  },
  // Logout
  logout: () => {
    localStorage.removeItem("tla-token");
    localStorage.removeItem("tla-user");
    Cookies.set("tla-token", res?.data?.data.token, {
      expires: 7,
      sameSite: "Strict",
    });
    set({ user: null, token: null });
  },
  setUserData: (data) => set({ user: data }),

  getUserProfile: async () => {
    set({ loading: true, error: null });
    const token = localStorage.getItem("tla-token");
    try {
      const res = await axios.get(`${BASE_URL}/protected/user/profile`, {
        headers: {
          Authorization: `${token}`, // Assuming you're using a Bearer token
        },
      });
      set({
        user: res.data.data,
        loading: false,
      });
      localStorage.setItem("tla-user", JSON.stringify(res.data.data));
      return res.data.data;
    } catch (err) {
      console.error(err);
    }
  },
  verifyUserAccount: async (signature) => {
    set({ loading: true, error: null });
    const token = localStorage.getItem("tla-token");
    try {
      const res = await axios.patch(
        `${BASE_URL}/protected/user/verify-account`,
        { signature },
        {
          headers: {
            Authorization: `${token}`, // Assuming you're using a Bearer token
          },
        }
      );
      return res?.data?.data;
    } catch (err) {
      console.error(err);
    }
  },
}));
