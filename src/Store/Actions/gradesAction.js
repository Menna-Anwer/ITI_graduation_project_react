import { axiosinstance } from "../../../Network/axiosinstance";

export const getGrades = () => (dispatch) => {
    return axiosinstance.get("/grade")
        .then((res)=>
            dispatch({
                type : "GET_GEADES_DATA",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}