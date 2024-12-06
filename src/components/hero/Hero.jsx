"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Initialize SwiperCore with the required modules
SwiperCore.use([Navigation, Autoplay]);

const HeroSlider = () => {
  const images = [
    {
      id: 1,
      url: "/images/home/hero1.jpg",
      urlMobile: "/images/home/hero_mobile1.jpg",
      text: "Our goal is to simplify CAC filing processes and ensure your business remains compliant throughout its growth.",
      bottomText: "CAC Services",
    },
    {
      id: 2,
      url: "/images/home/hero2.jpg",
      urlMobile: "/images/home/hero_mobile2.jpg",
      text: "We provide innovative and flexible Recruitment Solutions to help businesses find the right talent quickly and efficiently",
      bottomText: "Recruitment ",
    },
    {
      id: 3,
      url: "/images/home/hero3.jpg",
      urlMobile: "/images/home/hero_mobile3.jpg",
      text: "We are dedicated to equipping professionals and businesses with the skills and knowledge they need to excel in Business Analysis",
      bottomText: "Training & Development",
    },
    {
      id: 4,
      url: "/images/home/hero4.jpg",
      urlMobile: "/images/home/hero_mobile4.jpg",
      text: "Our goal is to provide expert financial accounting services, ensuring businesses achieve financial health and regulatory compliance.",
      bottomText: "Accounting Services",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleTextClick = (index) => {
    setActiveIndex(index);
    swiperRef.current.slideTo(index);
  };

  return (
    <div className="hero-slider">
      {/* Image Slider */}
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        navigation
        className="hero-swiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Reference Swiper instance
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="slide">
              <picture>
                <source srcSet={image.urlMobile} media="(max-width: 768px)" />
                <img src={image.url} alt={`Slide ${image.id}`} />
              </picture>
              {/* <img src={image.url} alt={`Slide ${image.id}`} /> */}
              <p className="slide-text">{image.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Options */}
      <div className="options-container">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`option ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleTextClick(index)}
          >
            {image.bottomText}
          </div>
        ))}
      </div>

      <style jsx>{`
        .hero-slider {
          position: relative;
          width: 100%;
          height: 90vh;
        }

        .slide {
          position: relative;
        }

        .slide img {
          width: 100%;
          height: 90vh;
          object-fit: cover;
        }

        .slide-text {
          position: absolute;
          left: 20px;
          align-self: center;
          top: 0;
          bottom: 0;
          color: white;
          width: 95%;
          z-index: 10;
          max-width: 500px;
          font-weight: 600;
          font-size: 2.375rem;
        }
        .options-container {
          position: absolute;
          bottom: 15px;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          display: flex;
          overflow: auto;
          gap: 15px;
          z-index: 20;
        }

        .option {
          cursor: pointer;
          padding: 5px 10px;
          color: gray;
          font-weight: 700;
          font-size: 20px;
          text-wrap: nowrap;
        }

        .option.active {
          border-top: 2px solid red;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
