"use client";
import { dasboardNavigation } from "@/data/dashboard";
import toggleStore from "@/store/toggleStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const toggle = toggleStore((state) => state.dashboardSlidebarToggleHandler);
  const path = usePathname();

  return (
    <>
      <header className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu border-1 border-b-2">
        <nav className="posr border-b-2">
          <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-start d-flex align-items-center">
                  <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                    <Link href="/" className="logo">
                      <Image
                        width={100}
                        height={20}
                        src="/images/logo.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="fz20 ml90">
                    <a
                      onClick={toggle}
                      className="dashboard_sidebar_toggle_icon vam"
                    >
                      <Image
                        height={18}
                        width={20}
                        src="/images/dashboard-navicon.svg"
                        alt="navicon"
                      />
                    </a>
                  </div>
                  <a
                    className="login-info d-block d-xl-none ml40 vam"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                </div>
              </div>
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-end header_right_widgets">
                  <ul className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0">
                    <li className="user_setting">
                      <div className="dropdown">
                        <a className="btn" data-bs-toggle="dropdown">
                          <Image
                            height={50}
                            width={50}
                            src="/images/resource/image.png"
                            alt="user.png"
                            className=" rounded-circle"
                          />
                        </a>
                        <div className="dropdown-menu">
                          <div className="user_setting_content">
                            {dasboardNavigation.map((item, i) => (
                              <Link
                                key={i}
                                className={`dropdown-item ${
                                  path === item.path ? "active" : ""
                                }`}
                                href={item.path}
                              >
                                <i className={`${item.icon} mr10`} />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
