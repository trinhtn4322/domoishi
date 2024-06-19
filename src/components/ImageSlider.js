// File: src/components/ImageSlider.js
import "../font.css"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import CSS navigation
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import nen1 from "../assets/Union 2.svg";
import slide1 from "../assets/ramen.svg";
import slide2 from "../assets/Layer-01.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  {img: slide2,
    content: "Starting a flavor journey with only one wing in hand"
  },
  {img: slide1,
    content: "Ramen: where every noodle tells a story."
  },
  {img: "http://103.157.218.115:8899/static/media/Group%20143.292bf1f1666685c1d6b2.png", 
    content: "Adventure in a cup: exploring the world of bubble tea."
  },
];

const ImageSlider = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        // src={nen1}
        src={"http://103.157.218.115:8899/static/media/Promo.0df82ade96e6c726ff0b.png"}
        alt="background"
        className="absolute object-cover"
      />

      {/* Swiper Container */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} 
        pagination={{ clickable: true }}
        navigation={{ 
          nextEl: ".swiper-button-next", 
          prevEl: ".swiper-button-prev" 
        }} 
        className="relative z-10"
        spaceBetween={10}
        slidesPerView={1} 
        centeredSlides={true} 
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.img}
              alt={`Image ${index + 1}`}
              className="ml-[14vw] h-[31vw] object-cover mt-[8vw]"
            />
            <div className=" w-[20.5vw]  absolute  top-[23vw] right-[15vw] transform  -translate-y-1/2  h-fit flex flex-col items-start justify-center space-y-[3vw]">
            <p className="text-start text-white leading-[3vw] text-[2.69vw]  uppercase" style={{ fontFamily: 'jonitha-script' }}>
            {image.content}
            </p>
            <button className="mt-10 bg-black text-white font-bold py-[1.5vw] px-[3vw] rounded-full hover:bg-gray-800  text-[1.2vw]" style={{ fontFamily: 'shopee-bold' }}>
            DISCOVER NOW
          </button>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev absolute z-10 px-[8vw] rounded-full text-white color-#000">
        </div>
        <div className="swiper-button-next absolute z-10 px-[8vw] rounded-full text-white">
         
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
