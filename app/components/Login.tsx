"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import FormDialog from "./Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { watch } from "fs";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const phoneNumber = watch("phoneNumber", "");

  const [isCodeButtonActive, setIsCodeButtonActive] = useState(true);
  const [isPasswordButtonActive, setIsPasswordButtonActive] = useState(false);

  const codeButtonHandler = () => {
    setIsCodeButtonActive(true);
    setIsPasswordButtonActive(false);
  };

  const passwordButtonHandler = () => {
    setIsCodeButtonActive(false);
    setIsPasswordButtonActive(true);
  };

  const onSubmit = (data: any) => {
    console.log("data of login form", data);
  };
  return (
    <FormDialog title={"خوش آمدید"}>
      <Box
        style={{
          border: "5px solid transparent",
          outline: "2px solid #b8a870",
          borderRadius: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Button
          onClick={codeButtonHandler}
          sx={{
            width: '50%',
            backgroundColor: isCodeButtonActive ? "#b8a870 !important" : "#fff",
            color: isCodeButtonActive ? "#fff !important" : "#b8a870",
            borderRadius: "1rem",
            fontSize: "1.3rem",
          }}
        >
          ورود با کد یکبار مصرف
        </Button>
        <Button
          onClick={passwordButtonHandler}
          sx={{
            width: '50%',
            fontSize: "1.3rem",
            backgroundColor: isPasswordButtonActive
              ? "#b8a870 !important"
              : "#fff !important",
            color: isPasswordButtonActive ? "#fff" : "#b8a870",
            borderRadius: "1rem",
          }}
        >
          ورود با رمز
        </Button>
      </Box>
      <Typography
        color="textSecondary"
        sx={{ fontWeight: "700", fontSize: "1.6rem", textAlign: "center" }}
      >
        لطفا شماره همراه خود را وارد نمایید{" "}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="شماره همراه"
          {...register("phoneNumber", {
            required: true,
            minLength: 11,
            maxLength: 11,
          })}
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
          disabled= {phoneNumber.length === 11}
        />
        {errors.phoneNumber && errors.phoneNumber.type === "required" && (
          <span style={{ color: "#f00e3b" }}>
            لطفا شماره همراه خود را وارد نمایید
          </span>
        )}
        {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
          <span style={{ color: "#f00e3b", fontWeight: '600'}}>
            ساختار شماره همراه صحیح نمی باشد
          </span>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{ color: "#fff", marginTop: '1rem' }}
          fullWidth
        >
          ارسال کد
        </Button>
      </form>
    </FormDialog>
  );
};
