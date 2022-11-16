import React, { useState } from 'react'
import AddLesson from '../../Components/AddLesson/addLesson';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./Lessone.css"
import MediaCard from '../../Components/CardLessone/CardLessone';
import { useSelector, useDispatch } from 'react-redux';
import { GetLessonsAction } from './../../Store/Actions/GetLessonsAction';
import { useEffect } from 'react';

function Lessone() {
    const [open, setOpen] = useState(false);
    const {lessons} =useSelector(state => state.lessonTeacher)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(GetLessonsAction("637490d138026d6dce0f3abc"))
    },[])


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <section className='container'> 
      <div className='row'>
        
        {lessons.map(ele=>(<MediaCard title={ele.lessonTitle} video={ele.lessonURL} subject={ele.lessonSubj}grade={ele.lessonGrade} />))}
      </div>
    
      <AddLesson open={open}  handleClickOpen={handleClickOpen} handleClose={handleClose}/>
      <Fab className="btn" color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </section>
  )
}

export default Lessone
