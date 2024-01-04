"use client";
import { Box, Button } from "@mui/material";
import FormDialog from "../Modal";
import { useState } from "react";
import { LoginWithPassword } from "./LoginWithPassword";
import { LoginWithCode } from "./LoginWithCode";

export const LoginForm = () => {
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
            width: "50%",
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
            width: "50%",
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
      {isCodeButtonActive ? <LoginWithPassword /> : <LoginWithCode />}
    </FormDialog>
  );
};
