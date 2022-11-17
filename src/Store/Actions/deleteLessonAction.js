import { axiosinstance } from "../../Network/axiosinstance";


export const deleteLessonsAction = (id) => async (dispatch) => {
    try {
        const res = await axiosinstance.delete(`/videos/${id}`);
        return dispatch({
            type: "DELETE_LESSON",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}