import { axiosinstance } from "../../Network/axiosinstance";

export const getLessons = () => async (dispatch) => {
    const grade = localStorage.getItem('grade');
    try {
        const res = await axiosinstance.get("/videos/student/lessons",{
            params:{
                grade: grade
            }
        });
        return dispatch({
            type: "GET_LESSONS_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }

}
