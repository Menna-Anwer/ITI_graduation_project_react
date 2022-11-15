import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import "./addLesson.css"
function AddLesson(props) {
  const {handleClose,open} = props;
  

  const handleClick =(e)=>{
      e.preventDefault();
  }

  return (
    <div className='container'>
        <Dialog open={open} onClose={handleClose} className="Dialog-container">
            <DialogContent >
                <form onSubmit={handleClick}>
                    <div className='form-container'>
                        <h2 className='lesson-header'>Add Lessone</h2>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button className='mb-3 mt-5' variant="contained" component="label">
                                Upload video
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </Stack>
                        <TextField className='input' id="outlined-uncontrolled" label="Title"/>
                        <select className="form-select form-select-md my-4 " aria-label=".form-select-md example">
                          <option selected>Select Subject</option>
                          <option value="1">Arabic</option>
                          <option value="2">English</option>
                          <option value="3">Math</option>
                          <option value="3">Science</option>
                        </select> 
                        <select className="form-select form-select-md my-4 " aria-label=".form-select-md example">
                          <option selected>Select Grade</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                          <option value="6">Six</option>
                        </select> 

                    </div>
                </form>
            </DialogContent>
        <DialogActions className=' my-3  mx-3'>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  onClick={handleClose}  variant="contained" endIcon={<SaveIcon />}>
             Save
          </Button>
        </DialogActions>
      </Dialog>
        
    </div>
  )
}

export default AddLesson ;
