"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import SelectInput from "@/components/dashboard/option/SelectInput";
import { product1 } from "@/data/product";
import ProductCard from "@/components/card/ProductCard";

const Products = () => {
  const [getCategory, setCategory] = useState({
    option: "All",
    value: "All",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const categoryHandler = (option) => {
    setCategory({
      option: option,
      value: option,
    });
  };
  const filteredProducts = product1.filter((item) => {
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
    img: "/images/customized.jpg",
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
      <div className="row my-4 mx-3">
        <div className="col-lg-12">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, i) => (
                <div key={i} className="col-sm-6 col-xl-3">
                  <ProductCard data={item} />
                </div>
              ))
            ) : (
              <div className=" d-flex justify-content-center">
                <div className="text-center p-4 col-4">
                  <ProductCard data={customizedService} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
