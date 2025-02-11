"use client";
import { dasboardNavigation } from "@/data/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function DashboardSidebar() {
  const { logout } = useAuthStore();
  const path = usePathname();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="dashboard__sidebar border">
        <div className="dashboard_sidebar_list">
          {dasboardNavigation.map((item, i) => (
            <div
              key={i}
              className="sidebar_list_item mb-1"
              onClick={item.name === "Logout" ? handleLogout : null}
            >
              <Link
                href={item.path}
                className={`items-center ${
                  path === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
