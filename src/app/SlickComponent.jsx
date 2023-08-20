'use client'

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AutoPlay() {
  const [mediaType, setMediaType] = useState("image");
  const [currentSlide, setCurrentSlide] = useState(-1);

  const handleSlideHover = (index) => {
    setCurrentSlide(index);
    setMediaType("video");
  };

  const handleSlideLeave = () => {
    setCurrentSlide(-1);
    setMediaType("image");
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    lazyLoad: "ondemand",
  };

  return (
    <div>
      <Slider {...settings}>
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            onMouseEnter={() => handleSlideHover(index)}
            onMouseLeave={handleSlideLeave}
          >
            {mediaType === "image" ? (
              <Image
                  src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_img0${index + 1}.png`}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={400}
                />
            ) : (
              <video
                src={`https://www.3d-allrounder.com/allrounder_portfolio/drone/drone_movie0${index + 1}.mp4`}
                height={400}
                preload="none"
                autoPlay
                muted
              ></video>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
