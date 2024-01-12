'use client'
import { Button, Typography } from "@mui/material"
import FormDialog from "../common/Modal"
import { Input } from "../common/Input"
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import { signUp } from "@/redux/features/auth/authSlice";

export const CompleteInformation = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const dispatch = useAppDispatch()
      const phoneNumber = watch("phoneNumber", "");

      const onSubmit = async (data: any) => {
       await dispatch(signUp(data));
      };

  return (
    <FormDialog title="ثبت نام">
        <Typography variant="h5" color="textSecondary">برای ثبت نام اطلاعات خود را وارد کنید</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            name="name"
            label="نام و نام خانوادگی"
            type="text"
            error={errors?.name?.message}
            register={register}
            validation={{
              required: "لطفا نام و نام خانوادگی خود را وارد نمایید",
            }}
          />
                 <Input
          name="phoneNumber"
          label="شماره همراه"
          type="text"
          error={errors?.phoneNumber?.message}
          register={register}
          disabled={false}
          validation={{
            required: "لطفا شماره همراه را وارد نمایید",
            minLength: {
              value: 11,
              message: "ساختار شماره همراه صحیح نمی باشد",
            },
            maxLength: {
              value: 11,
              message: " شماره همراه باید حداکثر 11 رقم باشد ",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: 'Please enter a number',
          },
          }}
          
        />
             <Input
            name="email"
            label="ایمیل"
            type="email"
            error={errors?.email?.message}
            register={register}
            validation={{
              required: "لطفا ایمیل خود را وارد نمایید",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              },
            }}
          />
             <Input
          name="password"
          label="رمز ورود"
          type="password"
          error={errors?.password?.message}
          register={register}
          disabled={false}
          validation={{
            required: "لطفا رمز را وارد نمایید",
            minLength: {
              value: 8,
              message: "min length is 8"
            },
            validate: (value: any) => {
              return (
                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                  pattern.test(value)
                ) || "must include lower, upper, number, and special chars"
              );
            },
          }}
        />
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "#fff", margin: "1.5rem 0" }}
            fullWidth
          >
           ثبت نام و ورود به حساب
          </Button>
        </form>
        <Typography color="#0f1f33" sx={{ fontSize: "1.6rem" }}>
          قبلا ثبت نام کرده اید؟{" "}
          <Typography variant="h5" component="span" color="primary">
            <Link href='/login'>وارد</Link>
          </Typography>
          شوید...{" "}
        </Typography>
    </FormDialog>
  )
}
