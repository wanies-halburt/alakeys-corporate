"use client";

import toggleStore from "@/store/toggleStore";
import DashboardHeader from "./header/DashboardHeader";
import DashboardSidebar from "./sidebar/DashboardSidebar";
import { useAuth } from "@/hook/useAuth";
import { Loader } from "@/components/Loader";

export default function DashboardLayout({ children }) {
  const isActive = toggleStore((state) => state.isDasboardSidebarActive);
  const auth = useAuth();
  const { isAuthenticating, userData } = auth;

  return isAuthenticating ? (
    <div className="loader-container">
      <Loader />
    </div>
  ) : (
    <>
      <DashboardHeader />
      <div className="dashboard_content_wrapper">
        <div
          className={`dashboard dashboard_wrapper pr30 pr0-xl ${
            isActive ? "dsh_board_sidebar_hidden" : ""
          }`}
        >
          <DashboardSidebar />
          <div className="dashboard__main pl0-md">{children}</div>
        </div>
      </div>
    </>
  );
  console.log("authenticating", isAuthenticating);
}
