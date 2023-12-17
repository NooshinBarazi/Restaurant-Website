import {ButtonBase,Card,CardContent,CardMedia,Typography} from "@mui/material";

export interface FoodProps {
  id: string;
  image: string;
  title: string;
  ingredients: string;
  price: number;
}

export const FoodItem = ({ image, title, ingredients, price , id}: FoodProps) => {
  return (
    <ButtonBase sx={{ marginRight: "2rem", maxWidth: "323px" }} id={id}>
      <Card sx={{ padding: "1.5rem"}}>
        <CardMedia
          component="img"
          image={image}
          width={"100%"}
          alt="Paella dish"
          sx={{ borderRadius: "8px" }}
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "rgba(0, 0, 0, 0.55)",
              fontWeight: "700",
              fontSize: "1.4rem",
              marginBottom: "2.3rem",
            }}
          >
            {ingredients}
          </Typography>
          <Typography sx={{ fontSize: "2.4rem", fontWeight: '500'}}>
            {Number(price).toLocaleString('fa-ir')} <span style={{fontSize: '1.4rem'}}>تومان</span>
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};
