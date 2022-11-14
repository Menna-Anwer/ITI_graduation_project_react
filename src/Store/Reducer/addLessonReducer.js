const INTIAL_VALUE ={
  lessone :null  
}
   
export default function AddLessonReducer(state=INTIAL_VALUE,action){
    switch (action.type) { 
        case "ADD_LESSON":
            return{
            ...state,
            lessone :action.payload
            }     
        default:
            return state;
    }
}