import { axiosinstance } from "../../Network/axiosinstance";

export const GetLessonsAction = (id) => (dispatch) => {
    return axiosinstance.get("/videos/teacher/lesson",{
        params:{
            id:id
        }
    })
        .then((res)=>
            dispatch({
                type : "GET_LESSONS",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}
