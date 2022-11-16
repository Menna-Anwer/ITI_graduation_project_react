import { axiosinstance } from "../../../Network/axiosinstance";

export const getTimeTable = () => (dispatch) => {
    return axiosinstance.get("/classtimetable/table",{
        params:{
            grade : "one"
        }
    })
        .then((res)=>
            dispatch({
                type : "GET_TIMETAPLE_DATA",
                payload: res.data
            })
        )
        .catch((err) => console.log(err))
}