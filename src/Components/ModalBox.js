import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MaterialInput from '../UI/MaterialInput';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TransitionsModal = ({setOpen,modalValue, open,setModalValue, setSelectedInputId, setSelectedIndex,handleModalInputChange}) => {

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null); // Reset the selected input ID
    setModalValue("")
  };

  const handleSave =async () => {
  //   await onChangeHandler()


  //   // Call the onChangeHandler with the modal input box value
   await handleClose();
  };

  // console.log("modal value" , modalValue);

   

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
         <MaterialInput 
            type="text"
            value={modalValue}
            placeholder='Type something here'
            onChange={(e) => handleModalInputChange(e)}
         
         />
            </Typography>
            <Button onClick={handleSave} >save</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}