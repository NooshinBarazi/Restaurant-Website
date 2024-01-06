import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PasswordProps{
    visibility: boolean,
    onClick: ()=>void
}

export const PasswordField = ({ visibility, onClick }: PasswordProps) => {
  return (
    <span
      onClick={onClick}
      style={{ paddingLeft: "1rem", textAlign: "center" }}
    >
      {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </span>
  );
};
