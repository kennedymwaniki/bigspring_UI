"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import slider1 from "../../public/service-slide-1.webp";
import slider2 from "../../public/service-slide-2.webp";
import slider3 from "../../public/service-slide-3.webp";
const images = [slider1, slider2, slider3];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
            index === currentIndex
              ? "translate-x-0"
              : direction === "next"
              ? index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
              : index < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            width={500}
            height={300}
            className="w-auto h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-teal-600" : "bg-teal-200"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
