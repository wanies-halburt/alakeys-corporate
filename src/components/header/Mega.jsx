import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Mega({ staticMenuClass }) {
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
      <div id="mega-menu">
        <a
          className={`btn-mega ${
            path === "/" && !scrolled ? "text-white" : "primary-text-color"
          } fw500 ${staticMenuClass ? staticMenuClass : ""} `}
        >
          <span
            className={`${
              path === "/" && !scrolled ? "text-white" : "primary-text-color"
            } pl30 pl10-xl pr5 fz15 vam flaticon-menu ${
              staticMenuClass ? staticMenuClass : ""
            } `}
          />
          Categories
        </a>

        <ul className="menu">
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-developer" />
              <span className="menu-title">Development &amp; IT</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="">
                <div className="h6 cat-title">Web &amp; App Development</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service/web">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/service/web">App Development</Link>
                  </li>
                  <li>
                    <Link href="/service/web">UX/UI Development</Link>
                  </li>
                  <li>
                    <Link href="/service/web">Custom Software Development</Link>
                  </li>
                  <li>
                    <Link href="/service/web">E-Commerce Development</Link>
                  </li>
                  <li>
                    <Link href="/service/web">Web Application Development</Link>
                  </li>
                </ul>
              </div>
              {/* <div>
                <div className="h6 cat-title">IT Support &amp; Services</div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/">Network Solutions</Link>
                  </li>
                  <li>
                    <Link href="/">IT Consultation</Link>
                  </li>
                  <li>
                    <Link href="/">Cloud Computing</Link>
                  </li>
                  <li>
                    <Link href="/">Database Management</Link>
                  </li>
                  <li>
                    <Link href="/">IT Infrastructure Management</Link>
                  </li>
                  <li>
                    <Link href="/">Cybersecurity Services</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-web-design-1" />
              <span className="menu-title">CAC Services</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/service/cac">
                      Registration & Formation of Companies
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/cac">Company Annual Returns</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-digital-marketing" />
              <span className="menu-title">Tax</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service/tax">Tax Registration Services</Link>
                  </li>
                  <li>
                    <Link href="/service/tax">
                      Preparation and Filing of Tax Returns
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-digital-marketing" />
              <span className="menu-title">Financial Accounting Services</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service/accounting">Bookkeeping</Link>
                  </li>
                  <li>
                    <Link href="/service/accounting">Financial Reporting</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-briefcase" />
              <span className="menu-title">Auditing</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service/auditing">
                      Financial Statement Audits
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-cv" />
              <span className="menu-title">Recruitment </span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service/recruitment">
                      DIY Recruitment Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/recruitment">
                      Talent Pool Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/recruitment">
                      Job Advertising and Screening
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/recruitment">
                      Consulting and Advisory
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-cv" />
              <span className="menu-title">Training & Development </span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service/training">
                      Fundamentals of Business Analysis Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/training">
                      Advanced Business Analysis Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/training">
                      Corporate Training Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/training">Workshops and Seminars</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
