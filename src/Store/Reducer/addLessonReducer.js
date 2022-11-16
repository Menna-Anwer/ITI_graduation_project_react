const INTIAL_VALUE ={
  lessones : []
}
   
export default function LessonReducer(state=INTIAL_VALUE,action){
    switch (action.type) { 
        case "ADD_LESSON":
            return{
            ...state,
            lessones :action.payload
            }     
        case "GET_LESSONS":
            return{
            ...state,
            lessones :action.payload
            }      
        default:
            return state;
    }
}