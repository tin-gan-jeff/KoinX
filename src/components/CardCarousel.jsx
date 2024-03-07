import React, { useState, useEffect, useRef } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp, IoNewspaperSharp } from 'react-icons/io5';
import { PiChartLineUp } from "react-icons/pi";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const newWidth = carouselWidth < 640 ? carouselWidth * 0.9 : carouselWidth * 0.4;
        setItemWidth(newWidth);
      }
    };

    calculateWidth();

    window.addEventListener('resize', calculateWidth);

    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const items = [
    {
      bgColor: '#cbe8fd8a',
      icon: IoNewspaperSharp,
      iconBgColor: '#0082ff8a',
      title: 'Lorem Ipsum is simply dummy',
      description: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      bgColor: '#c5fce8',
      icon: PiChartLineUp,
      iconBgColor: '#0fba83',
      title: 'Lorem Ipsum is simply dummy',
      description: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      bgColor: '#cbe8fd8a',
      icon: IoNewspaperSharp,
      iconBgColor: '#0082ff8a',
      title: 'Lorem Ipsum is simply dummy',
      description: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      bgColor: '#cbe8fd8a',
      icon: IoNewspaperSharp,
      iconBgColor: '#0082ff8a',
      title: 'Lorem Ipsum is simply dummy',
      description: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      bgColor: '#c5fce8',
      icon: PiChartLineUp,
      iconBgColor: '#0fba83',
      title: 'Lorem Ipsum is simply dummy',
      description: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      bgColor: '#cbe8fd8a',
      icon: IoNewspaperSharp,
      iconBgColor: '#0082ff8a',
      title: 'Lorem Ipsum is simply dummy',
      description: 'Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
  ];

  return (
    <div className="relative">
    <div className="overflow-hidden relative" ref={carouselRef}>
      <div
        className="flex transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 mb-[2px] mr-2 md:mr-4 lg:mr-4"
            style={{ width: `${itemWidth}px` }}
          >
            <div className={`bg-[${item.bgColor}] flex flex-row space-x-2 p-4 rounded-md h-full`}>
              <div className={`bg-[${item.iconBgColor}] p-3 rounded-full self-start`}>
                <item.icon />
              </div>
              <div>
                <p className="text-black font-medium">{item.title}</p>
                <p className="text-black text-[13px] text-justify">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 left-0 bg-[#ffffff] text-gray-600 p-2 rounded-full z-10 ${currentIndex === 0 ? 'hidden' : ''}`}
      >
        <IoChevronBackSharp color='gray' size={20} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 bg-[#ffffff] text-gray-600 p-2 rounded-full z-10 ${currentIndex === items.length - 1 ? 'hidden' : ''}`}
      >
        <IoChevronForwardSharp color='gray' size={20} />
      </button>
    </div>
  </div>
  );
};

export default CardCarousel;
