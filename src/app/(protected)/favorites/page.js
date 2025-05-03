"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/card/ProductCard";
import { Loader } from "@/components/Loader";
import axios from "axios";

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const token = localStorage.getItem("alakeys-token");
        const response = await axios.get("/api/favorite", {
          headers: {
            authorization: `${token}`,
          },
        });
        setProducts(response.data?.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className="p-5">
      <h3 className="title text-center fw-bold pb-3">Favourites</h3>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {!isLoading && products?.length ? (
              products.map((item, i) => (
                <div key={i} className="col-sm-6 col-xl-3">
                  <ProductCard data={item.product} />
                </div>
              ))
            ) : isLoading ? (
              <div className="loader-container">
                <Loader />
              </div>
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
