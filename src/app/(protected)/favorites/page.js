"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/card/ProductCard";
import axios from "axios";

const Favorites = () => {
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
    <div className="p-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {!isLoading && products?.length ? (
              products.map((item, i) => (
                <div key={i} className="col-sm-6 col-xl-3">
                  <ProductCard data={item.product} />
                </div>
              ))
            ) : (
              <div className="col-lg-12">
                <h3 className="text-center mt30">
                  No Service has been marked as favourite!!!
                </h3>
              </div>
            )}
            <div className="col-lg-12">
              <div className="text-center mt30">
                <Link
                  className={`ud-btn bdrs60 "btn-light-thm"
                  `}
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
  );
};

export default Favorites;
