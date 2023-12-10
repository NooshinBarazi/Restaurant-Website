import { ButtonBase, Typography, Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

export interface CategoryProps {
  title: string;
  icon: ReactNode;
  onClick: () => void;
}

export const MenuCardItem = ({ title, icon, onClick }: CategoryProps) => {
  return (
    <>
      <ButtonBase onClick={onClick}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component='h2' color={'textPrimary'} sx={{ "&:hover": { color: "gray" }}}>
              {title}
            </Typography>
            {icon}
          </CardContent>
        </Card>
      </ButtonBase>
    </>
  );
};
