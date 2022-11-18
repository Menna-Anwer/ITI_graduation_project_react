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
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../Components/auth';
import { useDispatch } from 'react-redux';
import { getUserAction, loginUserAction } from '../Store/Actions/getUserAction';
import { axiosinstance } from '../Network/axiosinstance';
const Login = () => {
  const [values, setValues] = useState({
    showPassword: false,
  });


  const auth = useAuth();

  const history = useHistory();

  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [userData, setData] = useState({
    email: '',
    password: "",
    type: 'student'
  })

  const [error, setError] = useState({
    emailError: null,
    passError: null,
    typeError: null
  })
  const changeData = (event) => {

    if (event.target.name === "email") {
      setData({
        ...userData,
        email: event.target.value,
      })
      setError({
        ...error,
        emailError: event.target.value.length === 0 ?
          "This Field is Required" : (event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? null : ' Not valid'
      })
      console.log(event.target.value)
    }
    /////////////////////////////////////
    else if (event.target.name === "password") {
      setData({
        ...userData,
        password: event.target.value,
      })
      setError({
        ...error,
        passError: event.target.value.length === 0 ?
          "This Field is Required" : event.target.value.length < 8 ?
            "Should be more than 8 characters " : null
      })
      console.log(event.target.value)
    }
    ////////////////////////////////////
    else if (event.target.name === "type") {
      setData({
        ...userData,
        type: event.target.value,
      })
      setError({
        ...error,
        typeError: event.target.value.length === 0 ?
          "This Field is Required" : null
      })
      console.log(event.target.value)
    }
  }
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let url = '';
      const cred = {
        email: userData.email,
        password: userData.password
      }
      if (userData.type === 'student') {
        url = '/student/login';
      } else {
        url = '/teacher/login'
      }
      const res = await axiosinstance.post(url, cred, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.data);
      if (userData.type === 'student') {
        auth.login(res.data._id, userData.type, res.data.grade);
      } else {
        auth.login(res.data._id, userData.type, res.data.subject);
      }
      history.replace(from);
      dispatch(getUserAction(res.data))
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='body-container'>
      <div className='container vh-100'>
        <div className='row h-100 justify-content-center align-items-center'>
        <form className='form-container col-xxl-7 col-xl-8 col-lg-9 col-md-10 col-sm-11 col-11' onSubmit={handleSubmit}>
          <div className='input-container' >
            <h1 className='mb-4' style={{ color: "RGB(146,148,163)" }}>Login</h1>
            <TextField fullWidth className='mb-3' id="demo-helper-text-misaligned-no-helper" value={userData.email}
              onChange={(event) => changeData(event)} name='email' type="email" label="Email" />
            {error && <p style={{ color: 'red' }}>{error.emailError}</p>}
            <FormControl fullWidth className='mb-3' variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={userData.password}
                onChange={(event) => changeData(event)}
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
            {error && <p style={{ color: 'red' }}>{error.passError}</p>}
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-label">Login as</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name='type'
                value={userData.type}
                label="Login as"
                onChange={changeData}
              >
                <MenuItem value={"student"}>Student</MenuItem>
                <MenuItem value={"teacher"}>Teacher</MenuItem>
              </Select>
            </FormControl>
            {error && <p style={{ color: 'red' }}>{error.typeError}</p>}
            <div className='pb-5'>
              <Button className='mt-5 btn-login' type='submit' variant="contained">Login</Button>

            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
