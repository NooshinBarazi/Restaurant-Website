import { Tabs } from "@mui/material";
import { FoodItem, FoodProps } from "./FoodItem";

interface Props {
  foods: FoodProps[];
}

export const FoodList = ({ foods }: Props) => {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
   
    <Tabs
      scrollButtons="auto"
      variant="scrollable"
      value={1}
      sx={{ width: "100%" }}
    >
      {foods.map((food) => {
        return (
          <FoodItem
            key={food.id}
            id={food.id}
            image={food.image}
            title={food.title}
            ingredients={food.ingredients}
            price={food.price}
          />
        );
      })}
    </Tabs>
    </div>
  );
};
