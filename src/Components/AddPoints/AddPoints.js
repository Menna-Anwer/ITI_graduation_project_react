import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import "../AddLesson/addLesson.css"
import { useDispatch } from 'react-redux';
import { updateStudentResultsAction } from '../../Store/Actions/updateStudentResultsAction';
const AddPoints = (props) => {
  const { handleClose, open, data } = props;
  const id = localStorage.getItem('id');
  const [pointData, setData] = useState({
    studentId: '',
    name: '',
    point: 0,
    feadback: "",
    subject: 'arabic',
    teacherId: id
  })

  const dispatch = useDispatch();

  useEffect(() => {
    if (data !== null) {
      setData({
        ...pointData,
        studentId: data._id,
        name: data.name
      })
    }
  }, [data])
  const changeData = (e) => {
    if (e.target.name === "point") {
      setData({
        ...pointData,
        point: e.target.value
      })
    }
    else if (e.target.name === "feadback") {
      setData({
        ...pointData,
        feadback: e.target.value,
      })
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    const result = {
      subject: pointData.subject,
      points: pointData.point,
      feadback: pointData.feadback,
      teacherId: pointData.teacherId
    }
    dispatch(updateStudentResultsAction(result, pointData.studentId));
    setData({
      ...pointData,
      feadback: '',
      name: '',
      point: '',
      studentId: '',
    });
    handleClose();
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} className="Dialog-container">
        <DialogContent >
          <form onSubmit={handleClick}>
            <div className='form1-container'>
              <h2 className='lesson-header'>Add Student's Points</h2>
              <h4 className='lesson-header'>{pointData.name}</h4>
              <TextField className='input' type={'number'} id="outlined-uncontrolled" name='point' value={pointData.point} onChange={(e) => changeData(e)} label="Points" />
              <TextField className='input' id="outlined-uncontrolled" name='feadback' value={pointData.feadback} onChange={(e) => changeData(e)} label="Feadback" />
              <div className=' my-3  mx-3'>
                <Button onClick={handleClose}>Cancel</Button>
                <Button className='ms-5' type="submit" variant="contained" endIcon={<SaveIcon />}>
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

export default AddPoints
