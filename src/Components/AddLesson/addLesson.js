import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import "./addLesson.css"
import { useDispatch } from 'react-redux';
import { AddLessonsAction } from './../../Store/Actions/AddLessonAction';
import Lessone from './../../Teacher/Lesson/Lessone';
import { editeLessonsAction } from '../../Store/Actions/editeLessonAction';
function AddLesson(props) {

  const { handleClose, open, data } = props;
  const id = localStorage.getItem('id');
  const [lessonData, setData] = useState({
    title: "",
    video: '',
    videoName: "",
    subject: "",
    grade: ""
  })
  const [error, setError] = useState({
    titleError: null,
    videoError: null,
    subjectError: null,
    gradeError: null,
  })

  useEffect(()=>{ 
    if(data !== null){
      setData({
        title: data.lessonTitle,
        video: '',
        videoName: data.lessonURL,
        subject: data.lessonSubj,
        grade: data.lessonGrade
      })
    }else{
      setData({
        title: "",
        video: '',
        videoName: "",
        subject: "",
        grade: ""
      })
    }
  },[data])
  const dispatch = useDispatch()

  const changeData = (e) => {
    if (e.target.name === "title") {
      setData({
        ...lessonData,
        title: e.target.value
      })
      setError({
        ...error,
        titleError: e.target.value.length === 0 ? "This Field is Required" : null
      })
    }
    ////////////////////////////////////////////////////////////
    else if (e.target.name === "video" && e.target.files.length > 0) {
      const file = e.target.files[0];
      setData({
        ...lessonData,
        video: file,
      })
      setError({
        ...error,
        videoError: e.target.value.length === 0 ? "This Field is Required" : null
      })
    }

    ///////////////////////////////////////////////////
    else if (e.target.name === "subject") {
      setData({
        ...lessonData,
        subject: e.target.value,
      })
      setError({
        ...error,
        subjectError: e.target.value.length === 0 ? "This Field is Required" : null
      })
    }
    /////////////////////////////////////////////    
    else if (e.target.name === "grade") {
      setData({
        ...lessonData,
        grade: e.target.value,
      })
      setError({
        ...error,
        gradeError: e.target.value.length === 0 ? "This Field is Required" : null
      })
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('lessonTitle', lessonData.title);
    if(lessonData.video === ''){
      formData.append('videoUrl', data.lessonURL)
    }else{
      formData.append('video', lessonData.video);
    }
    formData.append('lessonSubj', lessonData.subject);
    formData.append('lessonGrade', lessonData.grade);
    
    if(data === null){
      formData.append('lessonCreator', id);
      dispatch(AddLessonsAction(formData));
    }else{
      dispatch(editeLessonsAction(formData, data._id));
    }
     setData({
      title: '',
      grade: '',
      subject: '',
      video : '',
      videoName: ''
     })
     handleClose();
  }

  return (
    <div className='container'>
      <Dialog open={open} onClose={handleClose} className="Dialog-container">
        <DialogContent >
          <form onSubmit={handleClick}>
            <div className='form1-container'>
              <h2 className='lesson-header'>Add Lessone</h2>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button className='mb-3 mt-5' variant="contained" component="label">
                  Upload video
                  <input hidden accept="video/mp4" type="file"
                    name='video' onChange={(e) => changeData(e)} />
                </Button>
              </Stack>
              <TextField className='input' id="outlined-uncontrolled" name='title' value={lessonData.title} onChange={(e) => changeData(e)} label="Title" />

              <select className="form-select form-select-md my-4" name='subject' value={lessonData.subject} onChange={(e) => changeData(e)} aria-label=".form-select-md example">
                <option >Select Subject</option>
                <option value="1">Arabic</option>
                <option value="2">English</option>
                <option value="3">Math</option>
                <option value="4">Science</option>
                <option value="5">Computer</option>
                <option value="6">Social Studies </option>
                <option value="7">French</option>
              </select>

              <select className="form-select form-select-md my-4 " name='grade'
                value={lessonData.grade} onChange={(e) => changeData(e)} aria-label=".form-select-md example">
                <option >Select Grade</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
                <option value="five">Five</option>
                <option value="six">Six</option>
              </select>
              <div>
              <Button  onClick={handleClose}>Cancel</Button>
              <Button className='ms-3' type="submit" variant="contained" endIcon={<SaveIcon />}>
                Save
              </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddLesson;
