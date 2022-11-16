import { axiosinstance } from "../../../Network/axiosinstance";

export const getStudent = () => (dispatch) => {
    return axiosinstance.get("/student")
        .then((res)=>
            dispatch({
                type : "GET_STUDENT_DATA",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}