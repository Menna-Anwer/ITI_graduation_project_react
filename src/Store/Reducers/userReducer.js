const INITIAL_VALUE = {
    user : {}
}

export default function userReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_USER" :
            console.log(Action.payload);
            return{
                ...state,
                user: Action.payload
            }
        default :
        return state
    }
}