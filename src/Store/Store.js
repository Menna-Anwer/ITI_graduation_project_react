
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import CombineReducers from "./Reducer/CombineReducers";


const Store = createStore(CombineReducers,composeWithDevTools(applyMiddleware(thunk)))

export default Store;