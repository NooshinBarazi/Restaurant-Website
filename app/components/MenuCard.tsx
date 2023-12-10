import {Tabs } from "@mui/material";
import { MenuCardItem, CategoryProps } from "./MenuCardItem";

interface Props {
  categories: CategoryProps[];

}

export const MenuCard = ({ categories }: Props) => {
  return (
    <Tabs scrollButtons='auto' variant="scrollable">
      {categories.map((category) => {
        return (
            <MenuCardItem
              title={category.title}
              icon={category.icon}
              onClick={category.onClick}
            />
        );
      })}
    </Tabs>
  );
};
