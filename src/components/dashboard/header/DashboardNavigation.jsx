"use client";
import Link from "next/link";
import Image from "next/image";

export default function DashboardNavigation() {
  return (
    <div className="mobilie_header_nav stylehome1">
      <div className="mobile-menu">
        <div className="header bdrb1">
          <div className="menu_and_widgets">
            <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
              <Link className="mobile_logo" href="/">
                <Image
                  width={100}
                  height={20}
                  src="/images/logo.png"
                  alt="Header Logo"
                />
              </Link>
              <div className="right-side text-end">
                <a
                  className="menubar ml30"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/mobile-dark-nav-icon.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
