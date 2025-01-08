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
      text: `<p>Incorporation of company made easy</p> We will help you launch your business swiftly `,
      bottomText: "CAC Services",
    },
    {
      id: 2,
      url: "/images/home/hero2.jpg",
      urlMobile: "/images/home/hero_mobile2.jpg",
      text: "<p>Building a strong workforce together</p> Your partner for finding the best talent",
      bottomText: "Recruitment ",
    },
    {
      id: 3,
      url: "/images/home/hero3.jpg",
      urlMobile: "/images/home/hero_mobile3.jpg",
      text: "<p>Transform your workforce</p> into inspiring and motivating team <br/> Alakeys is your people enabler",
      bottomText: "Training & Development",
    },
    {
      id: 4,
      url: "/images/home/hero4.jpg",
      urlMobile: "/images/home/hero_mobile4.jpg",
      text: "<p>We do the numbers</p> Take control of your business financial future effortlessly",
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

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div
      className="hero-slider"
      onMouseEnter={handleMouseEnter} // Pause autoplay on hover
      onMouseLeave={handleMouseLeave}
    >
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
              <div
                className="slide-text"
                dangerouslySetInnerHTML={{ __html: image.text }}
              />
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
          left: 40px;
          align-self: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
          top: 0;
          bottom: 0;
          color: white;
          width: 90%;
          z-index: 10;
          max-width: 800px;
          font-weight: 600;
          font-size: 2rem;
          p {
            font-size: 16px;
            color: white;
            align-self: center;
            max-width: 400px;
          }
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
