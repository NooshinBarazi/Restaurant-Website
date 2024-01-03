import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface DialogProps{
    title: string;
    children: React.ReactNode
}

export default function FormDialog({title, children}: DialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth = 'xs'>
        <DialogActions>
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle variant="h2" sx={{ margin: "4.2rem auto"}}>
          {title}
        </DialogTitle>
        <DialogContent sx={{paddingTop: '1rem !important'}}>
          {children}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
