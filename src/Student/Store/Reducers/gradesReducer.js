const INITIAL_VALUE = {
    list : []
}

export default function gradesReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_GRADES_DATA" :
            return{
                ...state,
                list: Action.payload
            }
        default :
        return state
    }
}