import Link from "next/link";
import React from "react";

const Card = ({ title, description, link }) => {
  return (
    <div className="card hover-card">
      <div className="servicecard-body">
        <h5 className="servicecard-title">{title}</h5>
        <p className="servicecard-text">{description}</p>
        <Link href={link} className="servicecard-link">
          Find out more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Card;
