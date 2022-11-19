const INITIAL_VALUE = {
    user : {}
}

export default function userReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_USER" :
            return{
                user: Action.payload
            }
        default :
        return state
    }
}