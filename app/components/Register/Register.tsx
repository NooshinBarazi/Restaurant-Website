"use client";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import FormDialog from "../common/Modal";
import { Input } from "../common/Input";

export const RegisterForm = () => {
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
    <FormDialog title={"ثبت نام"}>
        <Typography variant="h5" color="textSecondary">
          برای ثبت نام لطفا{" "}
          <Typography variant="h5" component="span" color="primary">
            شماره همراه
          </Typography>{" "}
          خود را بنویسید
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
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "#fff", marginTop: "1rem" }}
            fullWidth
          >
            ارسال کد فعالسازی{" "}
          </Button>
        </form>
        <Typography
          color="#7d8fa9"
          sx={{ fontSize: "1.4rem", margin: "2.1rem 0" }}
        >
          {" "}
          ثبت نام به منزله ی پذیرفتن{" "}
          <Typography
            component="span"
            color="#0f1f33"
            sx={{ fontSize: "1.4rem" }}
          >
            شرایط استفاده{" "}
          </Typography>
          از فروشگاه می باشد{" "}
        </Typography>
        <Typography color="#0f1f33" sx={{ fontSize: "1.6rem" }}>
          قبلا ثبت نام کرده اید؟{" "}
          <Typography variant="h5" component="span" color="primary">
            وارد{" "}
          </Typography>
          شوید...{" "}
        </Typography>
    </FormDialog>
  );
};
