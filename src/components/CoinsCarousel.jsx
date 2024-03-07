import React, { useState, useEffect, useRef } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const CoinsCarousel = ({ coins, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemSmallWidth, setItemSmallWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        setItemWidth(carouselWidth / 7);
        setItemSmallWidth(carouselWidth / 2 + 30);
      }
    };
  
    updateDimensions();
  
    window.addEventListener("resize", updateDimensions);
  
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coins.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coins.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="rounded-md lg:p-4 p-2 bg-white">
      <p className="text-[#0b1426] font-semibold text-[18px] mb-4">{title}</p>

      <div className="relative">
        <div className="overflow-hidden relative" ref={carouselRef}>
          <div
            className="flex transition-all duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
          >
            {coins.map((coin, index) => (
              <div
                key={index}
                className={`lg:w-[${itemWidth}px] w-[${itemSmallWidth}px]  h-full border-[1.5px] lg:p-4 p-2 rounded-md border-gray-300 flex-shrink-0 mr-2 md:mr-2 lg:mr-4`}
              >
                <div className="flex flex-row items-center space-x-1">
                  <img
                    src={coin.item.small}
                    className="w-6 h-6 rounded-full"
                    alt={coin?.item?.name}
                  />
                  <div className="flex flex-row space-x-2">
                    <p className="text-[#0b1426] font-medium text-[12px]">
                      {coin?.item?.symbol}
                    </p>
                  </div>
                </div>
                <p className="text-[#0b1426] my-1 font-semibold text-[14px]">
                  {coin?.item?.data?.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
                <img
                  src={coin?.item?.data?.sparkline}
                  className="w-full h-10 rounded-full"
                  alt={coin?.item?.name}
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 -left-3 bg-[#ffffff] text-gray-600 p-2 rounded-full z-10 ${
              currentIndex === 0 ? "hidden" : ""
            }`}
          >
            <IoChevronBackSharp color="gray" size={20} />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 -right-3 bg-[#ffffff] text-gray-600 p-2 rounded-full z-10 ${
              currentIndex === coins.length - 6 ? "hidden" : ""
            }`}
          >
            <IoChevronForwardSharp color="gray" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinsCarousel;
