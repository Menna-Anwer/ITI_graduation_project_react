import { axiosinstance } from "../../Network/axiosinstance";

export const getTeacherTable = () => async (dispatch) => {
    try {
        const res = await axiosinstance.get("/teachertimetable/table", {
            params: {
                id: "637490d138026d6dce0f3abc"
            }
        });
        console.log(res.data)
        return dispatch({
            type: "GET_TEACHERTABLE_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}