import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export interface FoodProps {
  id: string;
  image: string;
  title: string;
  ingredients: string;
  price: string;
}

export const FoodItem = ({ image, title, ingredients, price , id}: FoodProps) => {
  return (
    <ButtonBase sx={{ marginRight: "2rem", maxWidth: "323px" }} id={id}>
      <Card sx={{ padding: "1.5rem" }}>
        <CardMedia
          component="img"
          image={image}
          width={"100%"}
          alt="Paella dish"
          sx={{ borderRadius: "8px" }}
        />
        <CardContent style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              fontFamily: "IranYekan",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
          <Typography
            style={{
              fontFamily: "IranYekan",
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
          <Typography sx={{ fontSize: "1.4rem", fontFamily: "IranYekan" }}>
            {price} تومان
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
    // <div style={{maxWidth: '323px'}}>

    // </div>
  );
};
