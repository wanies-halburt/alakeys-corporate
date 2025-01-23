"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

export default function PopularServiceCard1({
  data,
  style = "",
  isContentExpanded = false,
}) {
  const [isFavActive, setFavActive] = useState(false);
  const { user } = useAuthStore();

  return (
    <>
      <div className={`listing-style1 ${style}`}>
        <div className="list-thumb">
          <Image
            height={247}
            width={331}
            className="w-100"
            src={data.img}
            alt="thumbnail"
          />
          <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a>
        </div>
        <div className={`list-content ${isContentExpanded ? "px-0" : ""}`}>
          <p className="list-text body-color fz14 mb-1">{data.category}</p>
          <h5 className="list-title">
            <Link href={`/products/${data.id}`}>{data.title.slice(0, 40)}</Link>
          </h5>
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-end align-items-center mt15">
            <div className="budget">
              {user ? (
                <p className="mb-0 body-color">
                  Starting at
                  <span className="fz17 fw500 dark-color ms-1">
                    ₦{data.price}
                  </span>
                </p>
              ) : (
                <Link href="/login" className="mb-0 body-color">
                  Login to view price
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
