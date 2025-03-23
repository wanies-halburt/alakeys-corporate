"use client";
import { dasboardNavigation } from "@/data/dashboard";
import React, { useState, useEffect } from "react";
import toggleStore from "@/store/toggleStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function DashboardHeader() {
  const toggle = toggleStore((state) => state.dashboardSlidebarToggleHandler);
  const path = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      const token = localStorage.getItem("alakeys-token");
      const response = await axios.get("/api/favorite", {
        headers: {
          authorization: `${token}`, // Assuming you're using a Bearer token
        },
      });
      setProducts(response.data?.data);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

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
                  <div className="ml40 d-none d-xl-block">
                    {/* <div className="search_area dashboard-style">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="What service are you looking for today?"
                      />
                      <label>
                        <span className="flaticon-loupe" />
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-auto">
                <div className="text-center text-lg-end header_right_widgets">
                  <ul className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0">
                    <li className="d-none d-sm-block">
                      <a
                        className="text-center mr5 text-thm2 dropdown-toggle fz20"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <span className="flaticon-like" />
                      </a>
                      <div className="dropdown-menu">
                        <div className="dboard_notific_dd px30 pt10 pb15">
                          {products &&
                            products.map((item) => (
                              <div
                                className="notif_list d-flex align-items-center bdrb1 pb15 mb10"
                                key={item._id}
                              >
                                <Image
                                  height={40}
                                  width={40}
                                  src={item.img}
                                  alt="notif"
                                />
                                <div className="details ml10">
                                  <p className="text mb-0">{item.title}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </li>
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
                        {/* <div className="dropdown-menu">
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
                        </div> */}
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
