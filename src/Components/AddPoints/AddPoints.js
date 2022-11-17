import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import "../AddLesson/addLesson.css"
const AddPoints = (props) => {
    const {handleClose,open} = props;
    const [ pointData, setData] = useState({
       point:0,
       feadback:""
      })
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
    }   
  return (
    <div>
         <Dialog open={open} onClose={handleClose} className="Dialog-container">
            <DialogContent >
                <form  onSubmit={handleClick}>
                    <div className='form1-container'>
                        <h2 className='lesson-header'>Add Student's Points</h2>
                        <h4 className='lesson-header'>Student's Name</h4>
                        <TextField className='input'  id="outlined-uncontrolled" name='point'value={pointData.point} onChange={(e)=>changeData(e)}label="Points"/>
                        <TextField className='input'  id="outlined-uncontrolled" name='feadback'value={pointData.feadback} onChange={(e)=>changeData(e)}label="Feadback"/>
                    </div>
                </form>
            </DialogContent>
        <DialogActions className=' my-3  mx-3'>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" endIcon={<SaveIcon />}>
             Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddPoints
