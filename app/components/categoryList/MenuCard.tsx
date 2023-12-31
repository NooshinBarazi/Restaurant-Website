import { Tabs } from "@mui/material";
import { MenuCardItem, CategoryProps } from "./MenuCardItem";
import Link from "next/link";

interface Props {
  categories: CategoryProps[];
}

export const MenuCard = ({ categories }: Props) => {
  return (
    <Tabs
      scrollButtons="auto"
      variant="scrollable"
      value={0}
      sx={{ backgroundColor: "#fff" }}
    >
      {categories.map((category) => {
        return (
          <Link href={`#category-${category.id}`} key={category.id}>
            <MenuCardItem
              id={category.id}
              title={category.category_title}
              icon={category.category_icon}
              onClick={category.onClick}
            />
          </Link>
        );
      })}
    </Tabs>
  );
};
