import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStudent } from '../Store/Actions/studentAction';

function Profile() {

    const profile = useSelector((state)=> state.student.list)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudent())
    },[])

    return (
        <>
            <h1>Profile</h1>
        </>
    )

}

export default Profile