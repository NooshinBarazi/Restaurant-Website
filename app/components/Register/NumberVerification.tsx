'use client'
import { Button, Typography } from "@mui/material"
import FormDialog from "../common/Modal"
import { Input } from "../common/Input"
import { useForm } from "react-hook-form";
import { FormButton } from "../common/FormButton";
import { PasswordField } from "../common/PasswordField";
import { useState } from "react";

export const NumberVerification = () => {
    const [visibility, setVisibility] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data: any) => {
        console.log("data of login form", data);
      };

  return (
    <FormDialog title="">
         <Typography variant="h5" color="textSecondary">
          کد تایید پیامک شده به شماره 
          <Typography variant="h5" component="span" color="primary">{" "}
            09123456789
          </Typography>{" "}
          را وارد نمایید 
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input
            name="code"
            label="کد"
            type="number"
            error={errors?.code?.message}
            register={register}
            validation={{
              required: "لطفا کد را وارد نمایید",
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
          name="confirmPassword"
          label="تکرار رمز ورود "
          type={visibility ? "text" : "password"}
          error={errors?.confirmPassword?.message}
          register={register}
          disabled={false}
          validation={{
            required: "لطفا تکرار رمز را وارد نمایید",
          }}
        />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <FormButton label={"تغییر شماره موبایل"} onClick={()=> console.log('')} />
          <FormButton label={"ارسال مجدد کد تایید"} onClick={()=> console.log('')} />
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "#fff", marginTop: "2rem" }}
            fullWidth
          >
           تایید شماره موبایل
          </Button>
        </form>
    </FormDialog>
  )
}
