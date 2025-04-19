"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import axios from "axios";
import toaster from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const { verifyOtp, loading, user, loadFromStorage } = useAuthStore();

  useEffect(() => {
    if (loadFromStorage) {
      loadFromStorage();
    }
  }, []);

  const length = 4;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [countdown, setCountdown] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval = null;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsDisabled(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countdown]);

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
    if (!user) {
      router.push("/register");
    }
    const isLoggedIn = await verifyOtp({ email: user.email, otp: otpToNumber });
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  };
  const handleResendOtp = async (e) => {
    try {
      const response = await axios.post(`/api/resend-otp`, {
        email: user.email,
      });
      setIsDisabled(true);
      setCountdown(30);
      console.log(response);
      toaster.success(response?.data?.message || "Otp has been sent");
    } catch (err) {
      console.log(err);
      // @ts-ignore
      toaster.error(err?.response?.data?.message || "An error occured");
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
                <div className="d-flex justify-content-end mx-auto text-end">
                  {isDisabled ? (
                    `Resend OTP in ${countdown}s`
                  ) : (
                    <p
                      className="cursor-pointer btn text-end"
                      onClick={handleResendOtp}
                    >
                      Resend Otp
                    </p>
                  )}
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
