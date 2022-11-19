import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Profile.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import image from './pic.png'
import { getUserAction } from '../Store/Actions/getUserAction';
import { axiosinstance } from '../Network/axiosinstance';

function Profile() {
    // const profile = useSelector((state) => state.student.list)
    const [profile, setProfile] = React.useState({
        id: '',
        name: '',
        grade_subject: '',
        email: '',
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
            if (type === 'student') {
                sub_gra = res.data.grade
            } else {
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
                    '& > :not(style)': {
                        width: "100%",
                        height: 550,
                    },
                }}
            >
                <Paper elevation={3}>
                    {/* <Typography > */}
                    <div className="d-flex flex-lg-row-reverse flex-md-column flex-sm-column flex-column justify-content-between align-items-center p-lg-5 p-2 h-100 w-100">
                        <div className="d-flex flex-column align-items-center" style={{width: '55%'}}>
                            <img className="" src={image} width='50%' alt="Avatar" />
                            <h3 className='mt-lg-5 mt-2'>{profile.name}</h3>
                        </div>
                        <div className=''>
                            <h4 className='mb-3'>Email address</h4>
                            <h6 className='mb-lg-5 mb-4'>{profile.email}</h6>

                            <h4 className='mb-3'>{type === 'student' ? 'Level' : 'Subject'}</h4>
                            <h6 className='mb-lg-5 mb-4'>{type === 'student' && 'Primary'} {profile.grade_subject}</h6>

                            <h4 className='mb-3'>ID</h4>
                            <h6 className='mb-lg-5 mb-4'>{profile.id}</h6>

                        </div>

                    </div>

                    {/* </Typography> */}

                </Paper>

            </Box>

        </>
    )

}

function ProfileHolder(params) {
    return(
        <div className='vh-80 d-flex align-items-center justify-content-center'>
            <div style={{width: '85%'}}>
            <Profile></Profile>
            </div>
            
        </div>
    )
}

export default ProfileHolder