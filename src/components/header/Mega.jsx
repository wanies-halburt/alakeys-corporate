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
                    <Link href="/service#web-section">Website Development</Link>
                  </li>
                  <li>
                    <Link href="/service#web-section">App Development</Link>
                  </li>
                  <li>
                    <Link href="/service#web-section">UX/UI Development</Link>
                  </li>
                  <li>
                    <Link href="/service#web-section">
                      Custom Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#web-section">
                      E-Commerce Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#web-section">
                      Web Application Development
                    </Link>
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
                <div className="h6 cat-title">
                  Registration & Formation of Companies
                </div>
                <ul className="ps-0 mb-0">
                  <li>
                    <Link href="/service#cac-section">
                      Company Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#cac-section">
                      Business Name Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#cac-section">
                      Legal Compliance and Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#cac-section">
                      Consultation Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="one-third">
                <div className="h6 cat-title">Company Annual Returns</div>
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service#cac-section">
                      Preparation and Filing of Annual Returns
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#cac-section">
                      Compliance Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#cac-section">Document Management</Link>
                  </li>
                  <li>
                    <Link href="/service#cac-section">Advisory Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a className="dropdown">
              <span className="menu-icn flaticon-digital-marketing" />
              <span className="menu-title">Taxation</span>
            </a>
            <div className="drop-menu d-flex justify-content-between">
              <div className="one-third">
                <ul className="ps-0 mb40">
                  <li>
                    <Link href="/service#taxation-section">
                      Tax Registration Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#taxation-section">
                      Preparation and Filing of Tax Returns
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#taxation-section">
                      Tax Planning and Advisory
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#taxation-section">
                      Tax Compliance Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#taxation-section">
                      Tax Dispute Resolution
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
                    <Link href="/service#accounting-section">Bookkeeping</Link>
                  </li>
                  <li>
                    <Link href="/service#accounting-section">
                      Financial Reporting
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#accounting-section">
                      Payroll Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#accounting-section">
                      Financial Advisory Services
                    </Link>
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
                    <Link href="/service#auditing-section">
                      Financial Statement Audits
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#auditing-section">
                      Internal Audits
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#auditing-section">
                      Compliance Audits
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#auditing-section">
                      Operational Audits
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#auditing-section">
                      Forensic Audits
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#auditing-section">Tax Audits</Link>
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
                    <Link href="/service#recruitment-section">
                      DIY Recruitment Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#recruitment-section">
                      Talent Pool Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#recruitment-section">
                      Job Advertising and Screening
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#recruitment-section">
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
                    <Link href="/service#training-section">
                      Fundamentals of Business Analysis Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#training-section">
                      Advanced Business Analysis Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#training-section">
                      Corporate Training Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/service#training-section">
                      Workshops and Seminars
                    </Link>
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
