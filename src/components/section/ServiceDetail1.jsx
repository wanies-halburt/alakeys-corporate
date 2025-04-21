"use client";

// import ServiceDetailSlider1 from "../element/ServiceDetailSlider1";
import { StickyContainer } from "react-sticky";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import shopStore from "@/store/shopStore";

export default function ServiceDetail1({ img, title, description, _id }) {
  const { user } = useAuthStore();
  const addToCart = shopStore((state) => state.addToCart);

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("You need to be logged in to add to cart!!!");
    } else {
      addToCart(_id);
    }
  };
  return (
    <>
      <StickyContainer>
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-6">
                {/* <ServiceDetailSlider1 /> */}
                <Image
                  width={600}
                  height={350}
                  src={img}
                  alt={title}
                  className=" w-full shadow rounded"
                />
              </div>
              <div className=" col-lg-6">
                <h2>{title}</h2>
                <div className="service-about">
                  <div
                    className="list_bullet"
                    style={{
                      width: "100%",
                      alignItems: "center",
                      justifyItems: "center",
                      justifyContent: "center",
                      margin: "0px auto",
                    }}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
                <div className="w-fit max-w-[140px] cursor-pointer">
                  <button
                    className="ud-btn btn-thm cursor-pointer"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
