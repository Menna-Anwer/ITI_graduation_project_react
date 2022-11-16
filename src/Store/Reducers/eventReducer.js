const INITIAL_VALUE = {
    list : []
}

export default function eventReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_EVENTS_DATA" :
            return{
                ...state,
                list: Action.payload
            }
        default :
        return state
    }
}