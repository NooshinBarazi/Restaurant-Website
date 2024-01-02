'use client'
import { Box, Button, Modal, OutlinedInput, TextField, Typography } from "@mui/material";
import FormDialog from "./Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";


export const Login = () => {
  const { register } = useForm();
  const [isActive, setIsActive] = useState(true)
  return (
    <FormDialog title={"خوش آمدید"} textButton={"ارسال کد"}>
      <Box style={{border: '5px solid transparent', outline: '2px solid #b8a870' ,borderRadius: '1rem',marginBottom: '2rem'}}>
        <Button color="secondary" sx={{ padding: '0.5rem 2.5rem',  backgroundColor: '#b8a870', borderRadius: '1rem',  fontSize: '1.3rem',}}>ورود با کد یکبار مصرف</Button>
        <Button sx={{ fontSize: '1.3rem', padding: '0.5rem 2.5rem'}}>ورود با رمز</Button>
      </Box>
      <Typography color="textSecondary" sx={{fontWeight: '700', fontSize: '1.6rem', textAlign: 'center'}}>لطفا شماره همراه خود را وارد نمایید </Typography>
      <TextField
        label="شماره همراه"
        {...register("phoneNumber", { required: true })}
        fullWidth
        margin="normal"
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
        variant="filled"
      />
    </FormDialog>
  );
};
