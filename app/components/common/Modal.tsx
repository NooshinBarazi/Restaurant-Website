import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

interface DialogProps{
    title: string;
    children: React.ReactNode
}

export default function FormDialog({title, children}: DialogProps) {

  return (
      <Box sx={{textAlign: 'center', maxWidth: '55rem', backgroundColor: 'white', margin: 'auto'}}>
        <DialogTitle color='primary' variant="h2" sx={{ margin: "2rem auto", fontWeight: '700'}}>
          {title}
        </DialogTitle>
        <DialogContent sx={{paddingTop: '1rem !important', textAlign: 'center'}}>
          {children}
        </DialogContent>
      </Box>
  );
}
