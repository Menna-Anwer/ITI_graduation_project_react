import { axiosinstance } from "../../Network/axiosinstance";

export const getEvents = () => (dispatch) => {
    return axiosinstance.get("/events")
        .then((res)=>
            dispatch({
                type : "GET_EVENTS_DATA",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}