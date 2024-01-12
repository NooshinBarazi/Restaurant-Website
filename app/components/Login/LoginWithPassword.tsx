import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Input } from "../common/Input";
import Link from "next/link";

export const LoginWithPassword = () => {
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
        لطفا شماره همراه خود را وارد نمایید{" "}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="phoneNumber"
          label="شماره همراه"
          type="string"
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
        <Button
          type="submit"
          variant="contained"
          sx={{ color: "#fff", margin: "1.5rem 0" }}
          fullWidth
        >
          ارسال کد
        </Button>
      </form>
      <Typography variant="h5" fontWeight="bold" textAlign="center">
        تاکنون ثبت نام نکرده اید؟
        <Typography variant="h5" component="span" color="primary">
         <Link href='/register'>ثبت نام </Link>
        </Typography>
        کنید ...
      </Typography>
    </>
  );
};
