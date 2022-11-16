import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import compainReducer from "./Reducers/compainReducer";
import thunk from "redux-thunk";


const Store = createStore(compainReducer,composeWithDevTools(applyMiddleware(thunk)))

export default Store