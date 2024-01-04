import { Button, InputAdornment, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import { Input } from "../common/Input";

export const LoginWithCode = () => {
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
        sx={{ fontWeight: "700", fontSize: "1.6rem", textAlign: "center" }}
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
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
          name="password"
          label="رمز ورود"
          type="password"
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
        <Button
          type="submit"
          variant="contained"
          sx={{ color: "#fff", margin: "1rem 0" }}
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
