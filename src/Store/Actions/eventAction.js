import { axiosinstance } from "../../Network/axiosinstance";

export const getEvents = () => async (dispatch) => {
    try {
        const res = await axiosinstance.get("/events");
        return dispatch({
            type: "GET_EVENTS_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}