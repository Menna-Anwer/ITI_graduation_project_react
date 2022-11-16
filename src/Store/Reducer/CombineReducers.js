import {combineReducers} from "redux"
import AddLessonReducer from "./addLessonReducer"


export default combineReducers ({
    addLesson : AddLessonReducer
})