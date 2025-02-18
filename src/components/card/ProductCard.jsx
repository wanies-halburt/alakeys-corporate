"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import axios from "axios";

export default function PopularServiceCard1({
  data,
  style = "",
  isContentExpanded = false,
  customized = false,
}) {
  const [isFavActive, setFavActive] = useState(false);
  const { user } = useAuthStore();
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  const handleFavoriteClick = async () => {
    if (!user) {
      toast.error("You need to be logged in to add a product as favourite!!");
    } else {
      setFavActive(!isFavActive);
      const token = localStorage.getItem("alakeys-token");
      const payload = { productId: data._id };
      const res = await axios.post(`/api/add-favorite`, payload, {
        headers: {
          authorization: `${token}`, // Assuming you're using a Bearer token
        },
      });
      toast.success(res.data?.message || "Product added");
      console.log("res", res);
    }
  };

  const fetchFavs = async () => {
    try {
      const token = localStorage.getItem("alakeys-token");
      const res = await axios.get(`/api/favorite`, {
        headers: {
          authorization: `${token}`,
        },
      });
      setFavouriteProducts(res?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfProductIsFavourite = () => {
    if (data && favouriteProducts) {
      const hasMatchingId = favouriteProducts.some(
        (item) => item.product._id === data._id
      );
      setFavActive(hasMatchingId);
    }
  };

  useEffect(() => {
    if (user) {
      fetchFavs();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      checkIfProductIsFavourite();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, favouriteProducts, user]);

  return (
    <>
      <div className={`listing-style1 ${style}`}>
        <div className="list-thumb">
          <Image
            height={247}
            width={331}
            className=""
            src={data.img}
            alt="thumbnail"
          />
          <a
            onClick={handleFavoriteClick}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a>
        </div>
        <div className={`list-content ${isContentExpanded ? "px-0" : ""}`}>
          <p className="list-text body-color fz14 mb-1">{data.category}</p>
          <h5 className="list-title">
            <Link href={customized ? "/contact-us" : `/products/${data._id}`}>
              {data.title.slice(0, 40)}
            </Link>
          </h5>
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-end align-items-center mt15">
            <div className="budget">
              {user ? (
                <>
                  {!customized ? (
                    <p className="mb-0 body-color">
                      Starting at
                      <span className="fz17 fw500 dark-color ms-1">
                        ₦{data.price}
                      </span>
                    </p>
                  ) : null}
                </>
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
