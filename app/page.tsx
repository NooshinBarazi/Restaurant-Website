"use client";
import { Container } from "@mui/material";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { FoodList } from "./components/FoodList/FoodList";

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
  const foods = [
    {
      id: "1",
      image: "./assets/images/menuImage (1).webp",
      title: " سالاد خاتون / khatoon salad",
      ingredients:
        " میکس کاهو، ریحان، گوجه، خیار، فلفل دلمه کبابی، پیازچه، پنیر فتا، مرغ گریل شده، گردو، سس مه لقا Lettuce mix, basil, tomato, cucumber, grilled bell pepper, onion, feta cheese, grilled chicken, walnuts,Mehlaqa sauce",
      price: 125000,
    },
    {
      id: "2",
      image: "./assets/images/menuImage.webp",
      title: "spice wings/ بال اسپایسی",
      ingredients:
        " میکس کاهو، ریحان، گوجه، خیار، فلفل دلمه کبابی، پیازچه، پنیر فتا، مرغ گریل شده، گردو، سس مه لقا Lettuce mix, basil, tomato, cucumber, grilled bell pepper, onion, feta cheese, grilled chicken, walnuts,Mehlaqa sauce",
      price: 175000,
    },
    {
      id: "3",
      image: "./assets/images/menuImage (1).webp",
      title: "khatoon salad/ سالاد خاتون",
      ingredients:
        " میکس کاهو، ریحان، گوجه، خیار، فلفل دلمه کبابی، پیازچه، پنیر فتا، مرغ گریل شده، گردو، سس مه لقا Lettuce mix, basil, tomato, cucumber, grilled bell pepper, onion, feta cheese, grilled chicken, walnuts,Mehlaqa sauce",
      price: 15000,
    },
    {
      id: "4",
      image: "assets/images/menuImage.webp",
      title: "spice wings/ بال اسپایسی",
      ingredients:
        " میکس کاهو، ریحان، گوجه، خیار، فلفل دلمه کبابی، پیازچه، پنیر فتا، مرغ گریل شده، گردو، سس مه لقا Lettuce mix, basil, tomato, cucumber, grilled bell pepper, onion, feta cheese, grilled chicken, walnuts,Mehlaqa sauce",
      price: 14000,
    },
    {
      id: "5",
      image: "assets/images/menuImage.webp",
      title: "spice wings/ بال اسپایسی",
      ingredients:
        " میکس کاهو، ریحان، گوجه، خیار، فلفل دلمه کبابی، پیازچه، پنیر فتا، مرغ گریل شده، گردو، سس مه لقا Lettuce mix, basil, tomato, cucumber, grilled bell pepper, onion, feta cheese, grilled chicken, walnuts,Mehlaqa sauce",
      price: 1000
    },
  ];

  return (
    <Container>
      <FoodList foods={foods} />
    </Container>
  );
}
