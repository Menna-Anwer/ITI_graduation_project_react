import { axiosinstance } from "../../Network/axiosinstance";

export const GetStudentAction = () => (dispatch) => {
    return axiosinstance.get("/student")
        .then((res)=>
            dispatch({
                type : "GET_STUDENT",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}