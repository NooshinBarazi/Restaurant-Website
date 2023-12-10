'use client';

import { Container } from "@mui/material";
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { MenuCard } from "./components/MenuCard";


export default function Home() {
  const categories = [
    {title: 'سالادها', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'پیش خوراک', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'مزه های ایران زمین', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'کباب های ایران زمین', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'پلوهای اعیونی', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'غذاهای فرنگی', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'پاستاها', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'پاستاها', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'پاستاها', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'پاستاها', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
    {title: 'پاستاها', icon: <RamenDiningIcon />, onClick: ()=> console.log('clicked')},
]
  return <Container>
    <MenuCard categories={categories} />
  </Container>;
}
