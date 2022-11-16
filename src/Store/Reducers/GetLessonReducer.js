const INITIAL_VALUE = {
    lessons : []
}

export default function GetLessonsReducer (state = INITIAL_VALUE , Action){
    switch(Action.type){
        case "GET_LESSONS" :
            return{
                ...state,
                lessons: Action.payload
            }
        case "ADD_LESSON" :
            return{
                ...state,
                lessons: INITIAL_VALUE.lessons.push(Action.payload)
            }    
        default :
        return state
    }
}