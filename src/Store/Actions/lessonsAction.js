import { axiosinstance } from "../../Network/axiosinstance";

export const getLessons = () => (dispatch) => {
    return axiosinstance.get("/videos")
        .then((res)=>
            dispatch({
                type : "GET_LESSONS_DATA",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}
