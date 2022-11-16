const INITIAL_VALUE = {
    list : []
}

export default function studentReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_STUDENT_DATA" :
            return{
                ...state,
                list: Action.payload
            }
        default :
        return state
    }
}