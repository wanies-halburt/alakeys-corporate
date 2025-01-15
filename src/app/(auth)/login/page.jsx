"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/authStore";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email().required(" Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Page() {
  const { login, loading } = useAuthStore();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (formValues) => {
    const response = await login(formValues);
    console.log("response", response);
    if (response) {
      reset();
      router.push("/dashboard");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <section className="our-login">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Log In</h2>
                {/* <p className="paragraph">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p> */}
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
                  <h4>We're glad to see you again!</h4>
                  <p className="text">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-thm">
                      Register!
                    </Link>
                  </p>
                </div>
                <div className="mb20">
                  <label className="form-label fw600 dark-color">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                  />
                </div>
                <div className="mb15">
                  <label className="form-label fw600 dark-color">
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
                <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                  <label className="custom_checkbox fz14 ff-heading">
                    Remember me
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <a className="fz14 ff-heading">Forgotten password?</a>
                </div>
                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-thm"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log In"}{" "}
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
