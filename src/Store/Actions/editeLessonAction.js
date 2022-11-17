import { axiosinstance } from "../../Network/axiosinstance";


export const editeLessonsAction = (lesson, id) => async (dispatch) => {
    try {
        const res = await axiosinstance.put(`/videos/${id}`,lesson,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        });
        return dispatch({
            type: "EDITE_LESSON",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}