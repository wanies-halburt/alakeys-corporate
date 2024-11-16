"use client";

import { DM_Sans } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import BottomToTop from "@/components/button/BottomToTop";
import { usePathname } from "next/navigation";
import Header16 from "@/components/header/Header16";
import { sidebarEnable } from "@/data/header";
import toggleStore from "@/store/toggleStore";
import { footer } from "@/data/footer";
import "react-tooltip/dist/react-tooltip.css";
import NavSidebar from "@/components/sidebar/NavSidebar";
import Footer15 from "@/components/footer/Footer15";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});
export const toastOptions = {
  className: "z-40",
  success: {
    iconTheme: {
      primary: "white",
      secondary: "green",
    },
    style: {
      background: "green",
      color: "white",
    },
  },
  error: {
    iconTheme: {
      primary: "white",
      secondary: "red",
    },
    style: {
      background: "red",
      color: "white",
    },
  },
};

export default function RootLayout({ children }) {
  const isListingActive = toggleStore((state) => state.isListingActive);
  const path = usePathname();

  // wow js
  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${
          path === "/register" || path === "/login"
            ? "bgc-thm4 mm-wrapper mm-wrapper--position-left-front"
            : sidebarEnable.includes(path)
            ? isListingActive
              ? "menu-hidden-sidebar-content"
              : ""
            : ""
        }`}
      >
        {!footer.includes(path) ? (
          <div className="wrapper ovh mm-page mm-slideout">
            <Header16 />

            <div className="body_content">
              <Toaster position="top-right" toastOptions={toastOptions} />
              {children}
              <Footer15 />
              {/* bottom to top */}
              <BottomToTop />
            </div>
          </div>
        ) : (
          <div className="wrapper mm-page mm-slideout">
            <Toaster position="top-right" toastOptions={toastOptions} />
            {children}
            {/* bottom to top */}
            <BottomToTop />
          </div>
        )}

        {/* sidebar mobile navigation */}
        <NavSidebar />
      </body>
    </html>
  );
}
