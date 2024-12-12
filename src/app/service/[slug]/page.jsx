import React from "react";
import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import { categories } from "./data";

const ServiceDetails = ({ params }) => {
  const { slug } = params;
  const category = categories[slug];
  return (
    <div>
      <Breadcumb7 />
      <div
        className="container py-5"
        dangerouslySetInnerHTML={{ __html: category.body }}
      />
    </div>
  );
};

export default ServiceDetails;
