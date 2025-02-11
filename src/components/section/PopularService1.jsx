"use client";

import PopularServiceSlideCard1 from "../card/PopularServiceSlideCard1";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProductCard from "@/components/card/ProductCard";
import axios from "axios";
import { Loader } from "@/components/Loader";

const categories = [
  "All",
  "CAC Services",
  "Tax",
  "Financial Accounting",
  "Auditing",
  "Website Design & Development",
];

export default function PopularService1() {
  const [getCurrentCategory, setCurrentCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  // tab handler
  const tabHandler = (select) => {
    setCurrentCategory(select);
  };

  const path = usePathname();

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      const response = await axios.get("/api/fetch-products");
      setProducts(response.data?.data);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <section className={`pt-10 ${path === "/home-9" ? "pb0" : "pb10"}`}>
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-xl-3">
              <div className="main-title mb30-lg">
                <h2 className="title">Popular Services</h2>
                <p className="paragraph">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="navpill-style2 at-home9 mb50-lg">
                <ul
                  className="nav nav-pills mb20 justify-content-xl-end"
                  id="pills-tab"
                >
                  {categories.map((item, index) => (
                    <li key={index} className="nav-item">
                      <button
                        onClick={() => tabHandler(item)}
                        className={`nav-link fw500 dark-color ${
                          getCurrentCategory === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {!isLoading &&
                  products
                    .filter((item) =>
                      getCurrentCategory === "All"
                        ? item
                        : item.tag === getCurrentCategory && item
                    )
                    .slice(0, 8)
                    .map((item, i) => (
                      <div key={i} className="col-sm-6 col-xl-3">
                        <ProductCard data={item} />
                      </div>
                    ))}
                <div className="col-lg-12">
                  <div className="text-center mt30">
                    <Link
                      className={`ud-btn bdrs60 ${
                        path === "/home-9"
                          ? "btn-white2 double-border"
                          : "btn-light-thm"
                      }`}
                      href="/products"
                    >
                      All Services
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* <PopularServiceCard1 data={item} /> */
}
