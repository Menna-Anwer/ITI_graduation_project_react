const INITIAL_VALUE = {
    list : []
}

export default function lessonsReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_LESSONS_DATA" :
            return{
                ...state,
                list: Action.payload
            }
        default :
        return state
    }
}