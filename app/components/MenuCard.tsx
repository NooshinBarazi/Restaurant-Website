import { Grid } from "@mui/material";
import { MenuCardItem, CategoryProps } from "./MenuCardItem";

interface Props {
  categories: CategoryProps[];

}

export const MenuCard = ({ categories }: Props) => {
  return (
    <Grid container spacing={1}>
      {categories.map((category) => {
        return (
          <Grid item>
            <MenuCardItem
              title={category.title}
              icon={category.icon}
              onClick={category.onClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
