import React, { useState } from 'react'
import AddLesson from '../../Components/AddLesson/addLesson';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./Lessone.css"
import MediaCard from '../../Components/CardLessone/CardLessone';
import { useSelector, useDispatch } from 'react-redux';
import { GetLessonsAction } from './../../Store/Actions/GetLessonsAction';
import { useEffect } from 'react';
import { deleteLessonsAction } from '../../Store/Actions/deleteLessonAction';

function Lessone() {
    const [open, setOpen] = useState(false);
    const [less, setLess] = useState(null);
    const {lessons} =useSelector(state => state.lessonTeacher)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(GetLessonsAction("637490d138026d6dce0f3abc"))
    },[])

    
    const handleClickOpen = (ele) => {
      if(ele !== undefined){
        setLess(ele);
      }
      setOpen(true);
    };
  
    const handleClose = () => {
      setLess(null);
      setOpen(false);
    };
  
    const handleDelete = (id) => {
      dispatch(deleteLessonsAction(id))
    }
  return (
    <section className='container'> 
      <div className='row'>
        {lessons.map(ele=>(<MediaCard title={ele.lessonTitle} video={ele.lessonURL} subject={ele.lessonSubj}grade={ele.lessonGrade} handleClickOpen={handleClickOpen} ele={ele} handleDelete={handleDelete} key={ele._id}/>))}
      </div>
    
      <AddLesson open={open} handleClose={handleClose} data={less}/>
      <Fab className="btn-addLesson" color="primary" aria-label="add" onClick={()=>{
        handleClickOpen()
      }}>
        <AddIcon />
      </Fab>
    </section>
  )
}

export default Lessone
