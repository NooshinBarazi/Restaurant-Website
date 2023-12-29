import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";


interface SliderImage {
  id: number;
  image_path: string;
}

interface SliderProps {
  imageSlider: SliderImage[];
}
export const ImageSlider = ({ imageSlider }: SliderProps) => {

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
        {imageSlider.map((image: any) => (
          <SwiperSlide className="slide-container" key={image.id}>
            <span className="blur-overlay left-blur"></span>
            <img
              src={image.image_path}
              className="slide-image"
            />
            <span className="blur-overlay right-blur"></span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
