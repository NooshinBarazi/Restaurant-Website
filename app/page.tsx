"use client";
import { Container } from "@mui/material";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";

export default function Home() {
  const categories = [
    {
      title: "سالادها",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "پیش خوراک",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "مزه های ایران زمین",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "کباب های ایران زمین",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "پلوهای اعیونی",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "غذاهای فرنگی",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "پیتزاها",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "چای و دمنوش",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "اسموتی ها",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "نوشیدنی ها",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
    {
      title: "نوشیدنی گرم",
      icon: <RamenDiningIcon />,
      onClick: () => console.log("clicked"),
    },
  ];
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
}
