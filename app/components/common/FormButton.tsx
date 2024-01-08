import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const useStyles = makeStyles({
  btnForm: {
    float: "left",
    background: "rgba(185,198,216,.15)",
    color: "#0f1f33",
    fontSize: "1.4rem",
    padding: "0.7rem 1.3rem",
    fontWeight: "700",
    borderRadius: "0.8rem",
  },
});

export const FormButton = ({label, onClick}: ButtonProps) => {
    const classes = useStyles();

  return <Button className={classes.btnForm} onClick={onClick}>{label}</Button>;
};
