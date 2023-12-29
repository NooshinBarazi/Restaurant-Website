import { ButtonBase, Typography, Card, CardContent } from "@mui/material";

export interface CategoryProps {
  id: number;
  title: string;
  icon: string;
  onClick: () => void;
}

export const MenuCardItem = ({ title, icon, onClick }: CategoryProps) => {
  console.log(icon);
  return (
    <>
      <ButtonBase onClick={onClick} sx={{ marginRight: '1rem' }}>
        <Card variant="outlined" sx={{padding: '0 1rem'}}>
          
            <Typography variant="h5" component='h2' color={'textPrimary'} sx={{ "&:hover": { color: "gray" }}}>
              {title}
            </Typography>
            <img src={icon} width={53} height={39}/>
         
        </Card>
      </ButtonBase>
    </>
  );
};
