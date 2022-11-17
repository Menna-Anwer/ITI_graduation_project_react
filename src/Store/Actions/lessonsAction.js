import { axiosinstance } from "../../Network/axiosinstance";

export const getLessons = () => async (dispatch) => {
    try {
        const res = await axiosinstance.get("/videos");
        console.log(res.data)
        return dispatch({
            type: "GET_LESSONS_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }

}
