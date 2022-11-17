const INITIAL_VALUE = {
    students : []
}
export default function GetStudentReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_STUDENT" :
            return{
                ...state,
                students: Action.payload.map(ele => {
                    return{
                        studentId : ele._id,
                        studentName : ele.name,
                        grade : ele.grade,
                        points : [],
                    }
                })
            }
        default :
        return state
    }
}