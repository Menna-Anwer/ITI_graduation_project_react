import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import lessonsReducer from "./lessonsReducer";
import gradesReducer from "./gradesReducer";
import studentReducer from "./studentReducer";

export default combineReducers ({
   event : eventReducer ,
   lessons : lessonsReducer ,
   grades : gradesReducer ,
   student : studentReducer
})