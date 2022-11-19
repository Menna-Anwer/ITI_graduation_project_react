import { axiosinstance } from "../../Network/axiosinstance";
import store from '../Store';
export const getTimeTable = () => async (dispatch) => {
    const grade = localStorage.getItem('grade')
    try {
        const res = await axiosinstance.get("/classtimetable/table", {
            params: {
                grade: grade
            }
        });
        return dispatch({
            type: "GET_TIMETABLE_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}