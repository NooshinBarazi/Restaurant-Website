import { Tabs } from "@mui/material";
import { MenuCardItem, CategoryProps } from "./MenuCardItem";

interface Props {
  categories: CategoryProps[];
}

export const MenuCard = ({ categories }: Props) => {
  return (
    <Tabs scrollButtons="auto" variant="scrollable" value={0}>
      {categories.map((category) => {
        return (
          <MenuCardItem
            key={category.title}
            title={category.title}
            icon={category.icon}
            onClick={category.onClick}
          />
        );
      })}
    </Tabs>
  );
};
