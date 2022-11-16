import React, { useState } from 'react'
import TablePoints from './../../Components/TablePoints/TablePoints';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import AddPoints from './../../Components/AddPoints/AddPoints';
const Points = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
       <TablePoints/>
       {/* <AddPoints open={open}  handleClickOpen={handleClickOpen} handleClose={handleClose}/> */}
      <Fab className="btn" color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default Points
