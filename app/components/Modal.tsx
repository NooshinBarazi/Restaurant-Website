import * as React from 'react';
import Modal from '@mui/material/Modal';


interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
    
  }

export default function BasicModal({ open, onClose }: RegisterModalProps) {
 

  return (
    <div>
      {/* <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       
      </Modal> */}
    </div>
  );
}
