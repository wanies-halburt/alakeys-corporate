"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/authStore";
import * as yup from "yup";

const registerSchema = yup.object({
  fullName: yup.string().required(" Full name is required"),
  email: yup.string().email().required(" Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Password is required"),
  userName: yup.string().required("User name is required"),
});

export default function Page() {
  const router = useRouter();
  const { signUp, loading } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (formValues) => {
    const response = await signUp(formValues);
    console.log("response", response);
    if (response) {
      reset();
      router.push("/verify-otp");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <section className="our-register">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Register</h2>
                <p className="paragraph">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <form
                className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb30">
                  <h4>Let's create your account!</h4>
                  <p className="text mt20">
                    Already have an account?{" "}
                    <Link href="/login" className="text-thm">
                      Log In!
                    </Link>
                  </p>
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mark Yusuf"
                    {...register("fullName")}
                  />
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Username
                  </label>
                  <input
                    type="text"
                    {...register("userName")}
                    className="form-control"
                    placeholder="alitf"
                  />
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                  />
                </div>
                <div className="mb15">
                  <label className="form-label fw500 dark-color">
                    Password
                  </label>
                  <div
                    className="password-input-container"
                    style={{ position: "relative" }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className="form-control"
                      placeholder="*******"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <div className="mb15">
                  <label className="form-label fw500 dark-color">
                    Confirm Password
                  </label>
                  <div
                    className="password-input-container"
                    style={{ position: "relative" }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("confirmPassword")}
                      className="form-control"
                      placeholder="*******"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-thm default-box-shadow2"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Account"}{" "}
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
