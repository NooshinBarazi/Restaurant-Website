import { ReactNode } from "react";
import { ButtonBase, Typography, Card, CardContent } from "@mui/material";

interface Props {
  Text: string;
  Icon: ReactNode;
  onClick: () => void;
}

export const MenuCard = ({ Text, Icon, onClick }: Props) => {
  return (
    <>
      <ButtonBase onClick={onClick}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component='h2' color={'#0f1f33'} sx={{ "&:hover": { color: "gray" }}}>
              {Text}
            </Typography>
            {Icon}
          </CardContent>
        </Card>
      </ButtonBase>
    </>
  );
};
