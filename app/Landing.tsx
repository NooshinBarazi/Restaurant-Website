"use client";
import { Container } from "@mui/material";
import MenuList from "./components/MenuList";
import { MenuCard } from "./components/categoryList/MenuCard";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import { FoodList } from "./components/FoodList/FoodList";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getFoods } from "@/redux/features/foods/foodsSlice";
import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";

export default function Landing() {
  const dispatch = useAppDispatch();
  const { categories, servicesForCategories, sliderImages } = useAppSelector(
    (state) => state.foods
  );

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);
  console.log("foods", servicesForCategories);
  return (
    <>
      <Container>
        <MenuList />
        <MenuCard categories={categories} />
        {/* <ImageSlider imageSlider={sliderImages}/> */}
        <HeroSection />
      </Container>
      <FoodList foods={servicesForCategories} categories={categories} />
    </>
  );
}
