import React from "react";
import Image from "next/image";
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
        className="pt-5 pb-5 list_bullet"
        style={{
          maxWidth: "1000px",
          width: "100%",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
          margin: "0px auto",
        }}
        dangerouslySetInnerHTML={{ __html: category.body }}
      />
      {slug === "recruitment" ? (
        <div className="container d-flex justify-content-center py-4">
          <div className="card" style={{ width: "25rem" }}>
            <Image
              src="https://askkayodemicah.com.ng/wp-content/uploads/2018/08/Find_Jobs.jpg"
              className="card-img-top"
              width={250}
              height={200}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Find the Job for You</h5>
              <p className="card-text">
                Discover your dream job and start your career today!
              </p>
              <div className=" d-flex justify-content-between">
                <button className="ud-btn rounded-3">Talent Pool</button>
                <button className="ud-btn btn-thm rounded-3">
                  DIY Recruitment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ServiceDetails;
