import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Profile.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
// import image from '../user.png'
import { getUserAction } from '../Store/Actions/getUserAction';
import { axiosinstance } from '../Network/axiosinstance';

function Profile() {
    // const profile = useSelector((state) => state.student.list)
    const [profile, setProfile] = React.useState({
        id:'',
        name:'',
        grade_subject:'',
        email:'',
    });
    const dispatch = useDispatch();
    const type = localStorage.getItem('type');
    const id = localStorage.getItem('id');
    let url = '';
    useEffect(() => {
        // dispatch(getStudent())
        if (type === 'student') {
            url = '/student/id/';
        } else {
            url = '/teacher/id/'
        }
        axiosinstance.get(url, {
            params: {
                id: id
            }
        }).then(res => {
            let sub_gra = '';
            if(type ==='student'){
                sub_gra = res.data.grade
            }else{
                sub_gra = res.data.subject
            }
            setProfile({
                id: res.data._id,
                name: res.data.name,
                email: res.data.email,
                grade_subject: sub_gra
            })
        });
    }, [])

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "80%",
                        height: 550,
                    },
                }}
            >
                <Paper elevation={3}>
                    {/* <Typography > */}
                        <div className=" main container mt-5 mb-0 ">
                            <div className="info bg-darck.bg-gradient">
                                <img className="img mt-5" src='' alt="Avatar" />
                                <h3 className='pt-0'>{profile.name}</h3>

                                <div className='basic mt-5'>
                                    <h4>Email address</h4>
                                    <h6>{profile.email}</h6>

                                    <h4>{type === 'student' ? 'Level' : 'Subject'}</h4>
                                    <h6>Primary {profile.grade_subject}</h6>

                                    <h4>ID</h4>
                                    <h6>{profile.id}</h6>

                                </div>
                            </div>
                        </div>

                    {/* </Typography> */}

                </Paper>

            </Box>

        </>
    )

}

export default Profile