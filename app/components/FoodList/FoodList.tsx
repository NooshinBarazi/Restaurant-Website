import "./FoodList.css";
import "swiper/css";
import "swiper/css/navigation";
import { FoodItem, FoodProps } from "./FoodItem";
import { IconButton } from "@mui/material";
import {Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwiperCore from "swiper";
import { CategoryProps } from "../categoryList/MenuCardItem";
import { useRef } from "react";

interface Props {
  foods: FoodProps[];
  categories: CategoryProps[];
}

SwiperCore.use([Navigation]);

export const FoodList = ({ foods, categories }: Props) => {
  return (
    <div className="category-container">
      {categories.map((category) => {
        return (
          <>
            <div className="new-category">
              <h3 className="category-title">{category.category_title}</h3>
              <div className="line-divider"></div>
              <div className="button-container">
                <NavigationButtons categoryId={category.id} />
              </div>
            </div>
            <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={{
                  nextEl: `.swiper-button-next-${category.id}`,
                  prevEl: `.swiper-button-prev-${category.id}`,
                }}
              >
                {foods
                  .filter((food) => food.service_category === category.id)
                  .map((food) => {
                    return (
                      <SwiperSlide key={food.id}>
                        <FoodItem
                          key={food.id}
                          id={food.id}
                          image={food.service_image}
                          title={food.service_title}
                          ingredients={food.recipe}
                          price={food.price}
                          category={food.service_category}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </>
        );
      })}
    </div>
  );
};

const NavigationButtons = ({ categoryId }: { categoryId: number }) => {
  const swiperRef = useRef<Swiper | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <IconButton
        className={`swiper-button-prev-${categoryId} swiper-navigation-button`}
        onClick={handlePrev}
      >
        <ArrowForwardIosIcon fontSize="large" style={{ color: "black" }} />
      </IconButton>
      <IconButton
        className={`swiper-button-next-${categoryId} swiper-navigation-button`}
        onClick={handleNext}
      >
        <ArrowBackIosIcon fontSize="large" style={{ color: "black" }} />
      </IconButton>
    </>
  );
};


