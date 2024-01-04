import { TextField, Typography } from "@mui/material";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  type: string;
  validation: any;
  error: any;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  disabled: boolean;
  InputProps?: any;
}

export const Input = ({
  name,
  label,
  type,
  validation,
  error,
  register,
  disabled,
  InputProps
}: InputProps) => {
  return (
    <>
      <TextField
        label={label}
        type={type}
        disabled={disabled}
        {...register(name, validation)}
        fullWidth
        margin="normal"
        variant="filled"
        InputProps={{style: { fontSize: '1.6rem', fontWeight: '700' }, ...InputProps}}
        sx={{
          "& label": {
            left: "unset",
            right: "1.75rem",
            transformOrigin: "right",
            fontSize: "1.6rem",
            paddingRight: "0.5rem",
          },
          "& legend": {
            textAlign: "right",
            fontSize: "1rem",
          },
        }}
      />
      <Typography variant="h5" color="error">
        {error}
      </Typography>
    </>
  );
};
