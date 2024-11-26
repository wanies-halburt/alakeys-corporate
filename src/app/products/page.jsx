"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import SelectInput from "@/components/dashboard/option/SelectInput";
import { product1 } from "@/data/product";
import PopularServiceCard1 from "@/components/card/PopularServiceCard1";

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
                  option: "Development & IT",
                  value: "Development & IT",
                },
                {
                  option: "Design & Creative",
                  value: "Design & Creative",
                },
                {
                  option: "Digital Marketing",
                  value: "Digital Marketing",
                },
                {
                  option: "Music & Audio",
                  value: "Music & Audio",
                },
                {
                  option: "Programming & Tech",
                  value: "programming-tech",
                },
                {
                  option: "Video & Animation",
                  value: "Video & Animation",
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
                  <PopularServiceCard1 data={item} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="card text-center p-4 border-danger">
                  <h5 className="text-danger">
                    No results for "{searchTerm || getCategory.value}"
                  </h5>
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
