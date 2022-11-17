import { axiosinstance } from "../../Network/axiosinstance";

export const updateStudentResultsAction = (result, id) => async (dispatch) => {
    try {
        const res = await axiosinstance.put(`/student/results/${id}`, JSON.stringify(result),{
            headers:{
                "Content-Type": "application/json"
            }
        });
        return dispatch({
            type: "UPDATE_RESULT",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}