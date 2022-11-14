import React, { useState } from 'react'
import AddLesson from '../../Components/AddLesson/addLesson';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./Lessone.css"
import MediaCard from '../../Components/CardLessone/CardLessone';

function Lessone() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <section className='container'> 
      <div className='row'>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
      </div>
    
      <AddLesson open={open}  handleClickOpen={handleClickOpen} handleClose={handleClose}/>
      <Fab className="btn-addLesson" color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </section>
  )
}

export default Lessone
