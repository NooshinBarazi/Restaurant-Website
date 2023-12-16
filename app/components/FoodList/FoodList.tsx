import "./FoodList.css";
import "swiper/css";
import "swiper/css/navigation";
import { FoodItem, FoodProps } from "../FoodItem";
import { IconButton } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwiperCore from "swiper";

interface Props {
  foods: FoodProps[];
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);


export const FoodList = ({ foods }: Props) => {
  return (
    <div className="category-container">
      <div className="new-category">
        <h3 className="category-title">سالادها</h3>
        <div className="line-divider"></div>
        <div className="button-container">
          <IconButton className='arrow-right'>
            <ArrowForwardIosIcon fontSize="small" style={{ color: "black" }} />
          </IconButton>
          <IconButton className='arrow-left'>
            <ArrowBackIosIcon fontSize="small" style={{ color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        >
          {foods.map((food) => {
            return (
              <SwiperSlide>
                <FoodItem
                  key={food.id}
                  id={food.id}
                  image={food.image}
                  title={food.title}
                  ingredients={food.ingredients}
                  price={food.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
