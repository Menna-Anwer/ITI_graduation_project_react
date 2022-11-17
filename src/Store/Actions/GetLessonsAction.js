import { axiosinstance } from "../../Network/axiosinstance";

export const GetLessonsAction = (id) => async (dispatch) => {
    try {
        const res = await axiosinstance.get("/videos/teacher/lessons", {
            params: {
                id: id
            }
        });
        return dispatch({
            type: "GET_LESSONS",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}
