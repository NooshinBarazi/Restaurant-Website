import { ButtonBase, Typography, Card, CardContent } from "@mui/material";
import Image from 'next/image'

export interface CategoryProps {
  id: number;
  title: string;
  icon: string;
}

export const MenuCardItem = ({ title, icon }: CategoryProps) => {
  
  return (
    <>
      <ButtonBase sx={{ marginRight: '1rem' }}>
        <Card variant="outlined" sx={{padding: '0 1rem'}}>
            <Typography variant="h5" component='h2' color={'textPrimary'} sx={{ "&:hover": { color: "gray" }}}>
              {title}
            </Typography>
            <Image src={icon} width={53} height={39} alt={`picture of ${title}`}/>
        </Card>
      </ButtonBase>
    </>
  );
};
