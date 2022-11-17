import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import "./Login.css"
import { MenuItem, Select } from '@mui/material';

const Login = () => {
    const [values, setValues] = useState({
        showPassword: false,
      });
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const [ userData , setData] = useState({
        email: '',
        password:""
       })
    
       const [error , setError] = useState({
          emailError : null,
          passError : null
       })
        const changeData =(event)=>{
           
            if(event.target.name === "email"){
                setData({
                    ...userData,
                    email: event.target.value,
                })
                setError({
                    ...error,
                    emailError: event.target.value.length === 0 ?
                    "This Field is Required" : (event.target.value.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? null :' Not valid'  
                })
                console.log(event.target.value)
            } 
            /////////////////////////////////////
            else if(event.target.name === "password"){
              setData({
                  ...userData,
                  password: event.target.value,
              })
              setError({
                  ...error,
                  passError: event.target.value.length === 0 ? 
                  "This Field is Required": event.target.value.length < 8 ? 
                  "Should be more than 8 characters " : null
                })
              console.log(event.target.value)
          }
        }

        const handleSubmit =(e)=>{
            e.preventDefault();
        }
  return (
    <div className='body-container'>
        <div className='container pt-3'>
             <form className='form-container' onSubmit={handleSubmit}>
              <div className='input-container' >
                <h1 style={{color:"RGB(146,148,163)"}}>Login</h1>
              <TextField className='input' id="demo-helper-text-misaligned-no-helper" value={userData.email} 
              onChange={(event)=>changeData(event)} name='email'  type="email"  label="Email" /> 
              {error && <p style={{color: 'red'}}>{error.emailError}</p>}  
              <FormControl className='input' variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={userData.password}
                        onChange={(event)=>changeData(event)}
                        name='password'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                      label="Password"
                     />
                </FormControl> 
                <FormControl className='input mt-4' variant="outlined">
                <InputLabel id="demo-simple-select-label">Login as</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"student"}
                  label="Login as"
                  onChange={changeData}
                >
                  <MenuItem value={"student"}>Student</MenuItem>
                  <MenuItem value={"teacher"}>Teacher</MenuItem>
                </Select>
              </FormControl>
                {error && <p style={{color: 'red'}}>{error.passError}</p>}       
                <div className='pb-5'>
                <Button className='mt-5 btn-login'  variant="contained">Login</Button>  

                </div>
              </div>
             </form>
        </div>
    </div>
  )
}

export default Login
