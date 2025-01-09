import React from "react";
import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import { categories } from "./data";
import Card from "../Card";
import { notFound } from "next/navigation";

const ServiceDetails = ({ params }) => {
  const { slug } = params;
  const category = categories[slug];
  if (!category) return notFound();
  return (
    <div>
      <Breadcumb7 />
      <div
        className="container pt-5"
        dangerouslySetInnerHTML={{ __html: category.body }}
      />
      {slug === "recruitment" ? (
        <div className="container d-flex justify-content-center py-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://askkayodemicah.com.ng/wp-content/uploads/2018/08/Find_Jobs.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Find the Job for You</h5>
              <p className="card-text">
                Discover your dream job and start your career today!
              </p>
              <a href="#" className="btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ServiceDetails;
