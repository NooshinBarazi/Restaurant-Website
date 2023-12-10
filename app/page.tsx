'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import { MenuCard } from "./components/MenuCard";
import RamenDiningIcon from '@mui/icons-material/RamenDining';


export default function Home() {
  return <Container>
    <MenuCard Text={"پیش غذا"} Icon={<RamenDiningIcon />} onClick={()=> console.log('clicked')} />
  </Container>;
}
