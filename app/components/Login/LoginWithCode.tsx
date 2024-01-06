import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Input } from "../common/Input";
import { useState } from "react";
import { PasswordField } from "../common/PasswordField";
import { FormButton } from "../common/FormButton";
import { PasswordeRcovery } from "./PasswordeRcovery";

export const LoginWithCode = () => {
  const [visibility, setVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const phoneNumber = watch("phoneNumber", "");

  const onSubmit = (data: any) => {
    console.log("data of login form", data);
  };
  return (
    <>
      <Typography
        color="textSecondary"
        sx={{ fontWeight: "700", fontSize: "1.6rem", textAlign: "center"}}
      >
        برای ورود به حساب شماره موبایل و رمز عبور خود را وارد نمایید
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="phoneNumber"
          label="شماره همراه"
          type="number"
          error={errors?.phoneNumber?.message}
          register={register}
          disabled={phoneNumber.length === 11}
          validation={{
            required: "لطفا شماره همراه خود را وارد نمایید",
            minLength: {
              value: 11,
              message: "ساختار شماره همراه صحیح نمی باشد",
            },
          }}
        />
        <Input
          InputProps={{
            endAdornment: (
              <PasswordField
                visibility={visibility}
                onClick={() => setVisibility(!visibility)}
              />
            ),
          }}
          name="password"
          label="رمز ورود"
          type={visibility ? "text" : "password"}
          error={errors?.password?.message}
          register={register}
          disabled={false}
          validation={{
            required: "لطفا رمز را وارد نمایید",
            minLength: {
              value: 11,
              message: "ساختار شماره همراه صحیح نمی باشد",
            },
          }}
        />
        <FormButton label="رمز عبور را فراموش کردم" onClick={()=> console.log('clicked') }/>
        <Button
          type="submit"
          variant="contained"
          sx={{ color: "#fff", margin: "2rem 0" }}
          fullWidth
        >
          ورود به حساب
        </Button>
      </form>
      <Typography variant="h5" fontWeight="bold" textAlign="center">
        تاکنون ثبت نام نکرده اید؟
        <Typography variant="h5" component="span" color="primary">
          {" "}
          ثبت نام{" "}
        </Typography>
        کنید ...
      </Typography>
    </>
  );
};
