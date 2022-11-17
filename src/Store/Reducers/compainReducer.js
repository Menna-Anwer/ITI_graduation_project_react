import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import lessonsReducer from "./lessonsReducer";
import timeTableReducer from "./gradesReducer";
import studentReducer from "./studentReducer";
import GetLessonsReducer from './GetLessonReducer';
import GetStudentReducer from './GetStudentsReducer';
import TeacherTimeTable from "./teachertableReducer";
export default combineReducers ({
   event : eventReducer ,
   lessons : lessonsReducer ,
   timeTable : timeTableReducer ,
   student : studentReducer,
   lessonTeacher : GetLessonsReducer,
   getStudent: GetStudentReducer,
   teacherTimeTable: TeacherTimeTable

})