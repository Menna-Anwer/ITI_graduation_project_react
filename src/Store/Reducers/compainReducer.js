import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import lessonsReducer from "./lessonsReducer";
import timeTableReducer from "./gradesReducer";
import studentReducer from "./studentReducer";
import GetLessonsReducer from './GetLessonReducer';

export default combineReducers ({
   event : eventReducer ,
   lessons : lessonsReducer ,
   timeTable : timeTableReducer ,
   student : studentReducer,
   lessonTeacher : GetLessonsReducer
})