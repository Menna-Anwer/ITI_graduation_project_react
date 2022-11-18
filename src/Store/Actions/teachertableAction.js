import { axiosinstance } from "../../Network/axiosinstance";
import store from '../Store'
export const getTeacherTable = () => async (dispatch) => {
    const id = localStorage.getItem('id')
    try {
        const res = await axiosinstance.get("/teachertimetable/table", {
            params: {
                id: id
            }
        });
        return dispatch({
            type: "GET_TEACHERTABLE_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}