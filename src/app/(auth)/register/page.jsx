"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useAuthStore } from "../../../store/authStore";
import { useDebounce } from "@/hook/useDebounce";

export default function Page() {
  const router = useRouter();
  // const {
  //   register,
  //   loading,
  //   error,
  //   verifyUsername,
  //   getUsernameSuggestion,
  //   usernameSuggestions,
  // } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const debouncedUsername = useDebounce(username, 1000);
  const debouncedEmail = useDebounce(email, 1000);
  const debouncedDisplayName = useDebounce(displayName, 1000);

  // useEffect(() => {
  //   const checkUsername = async () => {
  //     const val = await verifyUsername(debouncedUsername);
  //     setIsAvailable(val);
  //   };

  //   checkUsername();
  // }, [verifyUsername, debouncedUsername]);

  // useEffect(() => {
  //   const getSuggestions = async () =>
  //     await getUsernameSuggestion(debouncedDisplayName, debouncedEmail);

  //   getSuggestions();
  // }, [debouncedDisplayName, debouncedEmail, getUsernameSuggestion]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isRegistered = await register(email, password, displayName, username);
    if (isRegistered) {
      router.push("/");
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
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
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
                    value={displayName}
                    className="form-control"
                    placeholder="Mark Yusuf"
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase())}
                    className="form-control"
                    placeholder="alitf"
                  />
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <div className="d-grid mb20">
                  <button
                    className="ud-btn btn-thm default-box-shadow2"
                    type="button"
                    onClick={handleSubmit}
                    // disabled={loading}
                  >
                    Create Account
                    {/* {loading ? "Creating..." : "Create Account"}{" "} */}
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
