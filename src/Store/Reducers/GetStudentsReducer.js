const INITIAL_VALUE = {
    points : []
}

export default function GetStudentReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_STUDENT" :
            return{
                ...state,
                points: Action.payload
            }
        default :
        return state
    }
}