"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const resetPasswordSchema = yup.object({
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Password is required"),
});

export default function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { resetPassword, loading } = useAuthStore();

  const {
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  const length = 4;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value[e.target.value.length - 1] || "";
    setOtp(newOtp);

    if (e.target.value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");
    const pastedValues = pastedData.slice(0, length).split("");

    const newOtp = [...otp];
    for (let i = 0; i < length; i++) {
      if (pastedValues[i]) {
        newOtp[i] = pastedValues[i];
      }
    }
    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedOtp = otp.join("");
    const otpToNumber = parseInt(formattedOtp, 10);
    const isLoggedIn = await resetPassword({
      email: localStorage.getItem("reset-email"),
      otp: otpToNumber,
      password: getValues("password"),
      confirmPassword: getValues("confirmPassword"),
    });
    reset();
    if (isLoggedIn) {
      router.push("/login");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <section className="our-login">
        <div className="container">
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <div className="main-title text-center">
                    <h2 className="title">Enter new password</h2>
                  </div>
                  <h4> Check your inbox and confirm your email address</h4>
                  <p className="text">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-thm">
                      Register!
                    </Link>
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className="form-control otp-input"
                      maxLength={1}
                      disabled={loading}
                      value={digit}
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                      ref={(input) => {
                        if (input) inputRefs.current[index] = input;
                      }}
                    />
                  ))}
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
                <div className="my-2 justify-content-center align-content-center d-flex  ">
                  <button
                    className="ud-btn btn-thm w-50  align-items-center"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    Verify
                    {/* {loading ? "Verifying..." : "Verify"}{" "} */}
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
