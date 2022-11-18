import { axiosinstance } from "../../Network/axiosinstance";
import store from '../Store';
export const getTimeTable = () => async (dispatch) => {
    const grade = localStorage.getItem('grade')
    console.log(grade);
    try {
        const res = await axiosinstance.get("/classtimetable/table", {
            params: {
                grade: grade
            }
        });
        console.log(res.data)
        return dispatch({
            type: "GET_TIMETABLE_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}