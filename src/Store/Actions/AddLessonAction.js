import { axiosinstance } from "../../Network/axiosinstance";


export const AddLessonsAction = (lesson) => (dispatch) => {
    return axiosinstance.post("/videos",{
        data:JSON.stringify(lesson)
    })
        .then((res)=>
            dispatch({
                type : "ADD_LESSON",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}
