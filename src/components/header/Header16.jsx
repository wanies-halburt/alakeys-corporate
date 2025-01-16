import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Mega from "./Mega";
import MobileNavigation6 from "./MobileNavigation6";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

export default function Header16() {
  const [scrolled, setScrolled] = useState(false);
  const { user, loadFromStorage } = useAuthStore();
  const path = usePathname();
  useEffect(() => {
    loadFromStorage();
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header-nav nav-innerpage-style main-menu mx30 ${
          path === "/" && !scrolled ? "" : "bg-white"
        }`}
      >
        <nav className="posr">
          <div className="container posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0 px-xl-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={100}
                        height={20}
                        src="/images/logo.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>

                  <div className="home1_style">
                    <Mega />
                  </div>
                  <Navigation />
                </div>
              </div>
              <div className="col-auto pe-0 pe-xl-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex flex-column align-items-center">
                    <p
                      className={`text-decoration-underline m-0 ${
                        path === "/" && !scrolled ? "text-white" : ""
                      }`}
                      style={{ color: "rgb(3, 45, 96)" }}
                    >
                      Call
                    </p>{" "}
                    {/* Underline using Bootstrap */}
                    <a
                      href="tel:+2348088844023"
                      className={`${
                        path === "/" && !scrolled ? "text-white" : ""
                      }`}
                      style={{ color: "rgb(3, 45, 96)" }}
                    >
                      08088844023
                    </a>
                  </div>
                  {user ? (
                    <Link
                      className="ud-btn btn-dark add-joining bdrs12 text-white"
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        className={`d-flex align-items-center fs-6 fw-bold gap-1 ${
                          path === "/" && !scrolled ? "text-white" : ""
                        }`}
                        href="/login"
                        style={{ color: "rgb(1, 118, 211)" }}
                      >
                        <Image
                          src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#user-blue"
                          width={18}
                          height={18}
                          alt="icon"
                        />
                        Login
                      </Link>
                      <Link
                        className="ud-btn btn-dark add-joining bdrs12 text-white"
                        href="/register"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation6 />
    </>
  );
}
