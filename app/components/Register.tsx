import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface RegisterForm {
  phoneNumber: string;
  password: string;
}

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterModal = ({ open, onClose }: RegisterModalProps) => {
  const { register, handleSubmit } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = (data: any) => {
    
    console.log("Form submitted:", data);
    onClose(); 
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: "1.5rem",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          minWidth: 400,
        }}
      >
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h2" sx={{ margin: "4.2rem 0" }}>
          ثبت نام
        </Typography>
        <Typography variant="h5" color="textSecondary" fontWeight="bold">
          برای ثبت نام لطفا{" "}
          <Typography variant="h5" component="span" color="primary">
            شماره همراه
          </Typography>{" "}
          خود را بنویسید
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              
            }}variant="filled"
          />
          
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "#fff" }}
            fullWidth
          >
            ارسال کد فعالسازی
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
      </Box>
    </Modal>
  );
};

export default RegisterModal;
