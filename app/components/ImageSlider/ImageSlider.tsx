import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

const images = [
  "/assets/images/merchantSlide1.webp",
  "/assets/images/merchantSlide2.webp",
  "/assets/images/merchantSlide3.webp",
  "/assets/images/merchantSlide4.webp",
];

export const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        centeredSlides={true}
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {images.map((img) => (
          <SwiperSlide className="slide-container">
            <span className="blur-overlay left-blur"></span>
            <img
              src={img}
              className="slide-image"
            />
            <span className="blur-overlay right-blur"></span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
