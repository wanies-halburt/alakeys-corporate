"use client";
import React, { useState, useEffect } from "react";
import navigation from "@/data/navigation";
import { isActiveNavigation } from "@/utils/isActiveNavigation";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => {
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
      <ul className={`ace-responsive-menu ui-navigation`}>
        {navigation.map((item, i) => (
          <li
            key={i}
            className={`visible_list menu-active ${
              item.id == 1 ? "home-menu-parent" : ""
            } `}
          >
            {item.children ? (
              <a
                className={`list-item  ${
                  isActiveNavigation(path, item) ? "ui-active" : ""
                }`}
              >
                <span
                  className={`title ${
                    path === "/" && !scrolled
                      ? "text-white"
                      : "primary-text-color"
                  }`}
                >
                  {item.name}
                </span>{" "}
                {item.children && (
                  <span
                    className={`arrow ${
                      path === "/" && !scrolled
                        ? "text-white"
                        : "primary-text-color"
                    }`}
                  ></span>
                )}
              </a>
            ) : (
              <Link
                href={item.path}
                className={`list-item
                                ${item.path == path ? "ui-active" : ""}`}
              >
                <span
                  className={`title ${
                    path === "/" && !scrolled
                      ? "text-white"
                      : "primary-text-color"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )}

            {item.children && (
              <ul className={`sub-menu ${item.id == 1 ? "home-menu" : ""} `}>
                {item.children?.map((item2, i2) => (
                  <li
                    key={i2}
                    className={`menu-active ${
                      isActiveNavigation(path, item2) || item2.path === path
                        ? "ui-child-active"
                        : ""
                    }`}
                  >
                    {item2.children ? (
                      <a>
                        <span className="title">{item2.name}</span>
                        {item2.children && <span className="arrow "></span>}
                      </a>
                    ) : (
                      <Link href={item2.path}>
                        <span className="title">{item2.name}</span>
                      </Link>
                    )}

                    {item2.children && (
                      <ul className="sub-menu">
                        {item2.children?.map((item3, i3) => (
                          <li
                            key={i3}
                            className={
                              item3.path === path ||
                              item3.path === path.replace(/\/\d+$/, "")
                                ? "ui-child-active"
                                : ""
                            }
                          >
                            <Link href={item3.path}>{item3.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
