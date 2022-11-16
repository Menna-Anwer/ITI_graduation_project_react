// import React, { useState } from 'react'
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import SaveIcon from '@mui/icons-material/Save';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import "../AddLesson/addLesson.css"
// const AddPoints = (props) => {
//     const {handleClose,open} = props;
//   return (
//     <div>
//          <Dialog open={open} onClose={handleClose} className="Dialog-container">
//             <DialogContent >
//                 <form  onSubmit={handleClick}>
//                     <div className='form1-container'>
//                         <h2 className='lesson-header'>Add Student's Points</h2>
                       
//                         <TextField className='input'  id="outlined-uncontrolled" name='title'value={lessonData.title} onChange={(e)=>changeData(e)}label="Title"/>
                        
//                         <select  className="form-select form-select-md my-4" name='subject'value={lessonData.subject} onChange={(e)=>changeData(e)} aria-label=".form-select-md example">
//                           <option >Select Subject</option>
//                           <option value="1">Arabic</option>
//                           <option value="2">English</option>
//                           <option value="3">Math</option>
//                           <option value="4">Science</option>
//                           <option value="5">Computer</option>
//                           <option value="6">Social Studies </option>
//                           <option value="7">French</option>
//                         </select> 
                        
//                         <TextField className='input'  id="outlined-uncontrolled" name='feadback'value={studentData.feadback} onChange={(e)=>changeData(e)}label="Title"/>
//                         <TextField className='input'  id="outlined-uncontrolled" name='feadback'value={studentData.feadback} onChange={(e)=>changeData(e)}label="Title"/>

//                     </div>
//                 </form>
//             </DialogContent>
//         <DialogActions className=' my-3  mx-3'>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit" variant="contained" endIcon={<SaveIcon />}>
//              Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   )
// }

// export default AddPoints
