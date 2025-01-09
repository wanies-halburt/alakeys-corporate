"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value) || value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoggedIn = await login(email, password);
    if (isLoggedIn) {
      router.push("/dashboard");
    }
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
                    <h2 className="title">Verify OTP</h2>
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
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      maxLength={1}
                    />
                  ))}
                </div>

                <div className="my-2 justify-content-center align-content-center d-flex  ">
                  <button className="ud-btn btn-thm w-50  align-items-center">
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
