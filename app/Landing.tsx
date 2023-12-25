"use client";
import { Container } from "@mui/material";
import MenuList from "./components/MenuList";
import { MenuCard } from "./components/MenuCard";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import { FoodList } from "./components/FoodList/FoodList";

export async function getStaticProps(){
    const res = await fetch('http://37.32.21.146:8080/shop')
    const data = await res.json();
  
    return {
      props: {data}
    }
  
  };

  export default function Landing({data}: any) {
    console.log('recive data',data);
    return (
        <Container>
          <MenuList />
          <MenuCard categories={data.categories} />
          <ImageSlider />
          <FoodList foods={data.foods} />
        </Container>
      );
    }