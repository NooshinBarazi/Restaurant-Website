import { Button, Typography } from "@mui/material"
import FormDialog from "../common/Modal"
import { Input } from "../common/Input"
import { useForm } from "react-hook-form";

export const PasswordeRcovery = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const phoneNumber = watch("phoneNumber", "");
  return (
    <FormDialog title={"بازیابی رمز عبور"}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
        تاکنون ثبت نام نکرده اید؟
        <Typography variant="h5" component="span" color="primary">
          {" "}
          ثبت نام{" "}
        </Typography>
        کنید ...
      </Typography>
      <form>
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
          sx={{ color: "#fff", margin: "2rem 0" }}
          fullWidth
        >
          ورود به حساب
        </Button>
      </form>
    </FormDialog>
  )
}
