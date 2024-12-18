import React from "react";
import Breadcumb7 from "@/components/breadcumb/Breadcumb7";
import { categories } from "./data";
import { notFound } from "next/navigation";

const ServiceDetails = ({ params }) => {
  const { slug } = params;
  const category = categories[slug];
  if (!category) return notFound();
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
