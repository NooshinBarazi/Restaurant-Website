"use client";
import { Container } from "@mui/material";
import { FoodList } from "./components/FoodList/FoodList";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getFoods } from "@/redux/features/foods/foodsSlice";
import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { Header } from "./components/Header";

export default function Landing() {
  const dispatch = useAppDispatch();
  const { categories, servicesForCategories } = useAppSelector(
    (state) => state.foods
  );

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);
  
  return (
    <>
      <Header />
      <Container>
        <HeroSection />
      </Container>
      <FoodList foods={servicesForCategories} categories={categories} />
    </>
  );
}
