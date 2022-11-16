import {combineReducers} from "redux"
import LessonReducer from "./addLessonReducer"


export default combineReducers ({
    addLesson : LessonReducer
})