"use client";
import { Container } from "@mui/material";
import MenuList from "./components/MenuList";
import { MenuCard } from "./components/MenuCard";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import { FoodList } from "./components/FoodList/FoodList";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getFoods } from "@/redux/features/foods/foodsSlice";
import { useEffect } from "react";


  export default function Landing() {

    const dispatch = useAppDispatch();
    const {categories, servicesForCategories} = useAppSelector((state) => state.foods);
  
    useEffect(() => {
      dispatch(getFoods());
    }, [dispatch]);
  
    console.log('categories:', categories);
    console.log('servicesForCategories:', servicesForCategories);
    return (
        <Container>
          <MenuList />
          <MenuCard categories={categories} />
          <ImageSlider />
          <FoodList foods={servicesForCategories} />
        </Container>
      );
    }