import {createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Redux/Reducer/rootReducers"


export const store =  createStore(rootReducer,applyMiddleware(thunk));



