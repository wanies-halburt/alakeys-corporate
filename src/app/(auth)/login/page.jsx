"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthStore } from "../../../store/authStore";
import { useRouter } from "next/navigation";

export default function Page() {
  const { login, loading, getUserProfile } = useAuthStore();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLoggedIn = await login(email, password);
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  useEffect(() => {
    const checkUserprofile = async () => {
      const res = await getUserProfile();
      console.log("ress", res);
      // if (res?.email) {
      //   router.push("/dashboard");
      // }
    };
    checkUserprofile();
  }, [getUserProfile, router]);
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
                <p className="paragraph">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <h4>We're glad to see you again!</h4>
                  <p className="text">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-thm">
                      Sign Up!
                    </Link>
                  </p>
                </div>
                <div className="mb20">
                  <label className="form-label fw600 dark-color">
                    Email Address
                  </label>
                  <input
                    value={email}
                    type="email"
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  <a className="fz14 ff-heading">Lost your password?</a>
                </div>
                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-thm"
                    type="button"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? "Logging in..." : "Log In"}{" "}
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
                {/* <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">OR</span>
                </div>
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-facebook-f pr10" /> Continue Facebook
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-google" /> Continue Google
                  </button>
                  <button className="ud-btn btn-apple fz14 fw400" type="button">
                    <i className="fab fa-apple" /> Continue Apple
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
