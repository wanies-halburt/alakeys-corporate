"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import SelectInput from "@/components/dashboard/option/SelectInput";
import ProductCard from "@/components/card/ProductCard";
import axios from "axios";
import { Loader } from "@/components/Loader";
import customizedImage from "../../../public/images/customized.jpg";

const Products = () => {
  const [getCategory, setCategory] = useState({
    option: "All",
    value: "All",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categoryHandler = (option) => {
    setCategory({
      option: option,
      value: option,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      try {
        const response = await axios.get("/api/fetch-products");
        setProducts(response.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // You can also display an error message to the user here
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products?.filter((item) => {
    const matchesCategory =
      getCategory.value === "All" || item.tag === getCategory.value;
    const matchesSearch =
      searchTerm === "" ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const customizedService = {
    id: "001",
    img: customizedImage,
    category: "If you can't find what you are looking for",
    title: "Request for any service of your choice",
    tag: "Customized Service",
  };
  return (
    <div>
      <Breadcumb7
        title={"Products"}
        subtitle={"Choose from a variety of products offered on Alakeys"}
      />
      <div className=" row my-4 mx-3">
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw500 mb10">
              Search
            </label>
            <input
              placeholder="Search"
              label="Search"
              className="w-100 form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                maxHeight: "300px",
                height: "55px",
                overflowX: "auto",
              }}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb20">
            <SelectInput
              label="Category"
              className=" w-100"
              defaultSelect={getCategory}
              handler={categoryHandler}
              data={[
                {
                  option: "All",
                  value: "All",
                },
                {
                  option: "CAC Services",
                  value: "CAC Services",
                },
                {
                  option: "Tax",
                  value: "Tax",
                },
                {
                  option: "Financial Accounting",
                  value: "Financial Accounting",
                },
                {
                  option: "Auditing",
                  value: "Auditing",
                },
                {
                  option: "Website Design & Development",
                  value: "Website Design & Development",
                },
              ]}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="row my-4 mx-3">
          <div className="col-lg-12">
            <div className="row">
              {filteredProducts?.length > 0 ? (
                filteredProducts.map((item, i) => (
                  <div key={i} className="col-sm-6 col-xl-3">
                    <ProductCard data={item} />
                  </div>
                ))
              ) : (
                <div className=" d-flex justify-content-center">
                  <div className="text-center p-4 col-4">
                    <ProductCard data={customizedService} customized />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
