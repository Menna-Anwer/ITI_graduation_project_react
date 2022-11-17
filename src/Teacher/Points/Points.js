import React, { useState } from 'react'
import TablePoints from './../../Components/TablePoints/TablePoints';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import AddPoints from './../../Components/AddPoints/AddPoints';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetStudentAction } from './../../Store/Actions/GetStudentsAction';
import { useEffect } from 'react';
const Points = () => {
  const {students} = useSelector(state => state.getStudent)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetStudentAction())
  },[])
  console.log(students);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div>
       <TablePoints rows={students} handleClickOpen={handleClickOpen} />
       <AddPoints open={open}  handleClose={handleClose}/>
      {/* <Fab className="btn" color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab> */}
    </div>
  )
}

export default Points
