import { combineReducers } from 'redux';
import {dataReducer} from "./reducer";
import { postReducer } from './postReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    post : postReducer
  });
  
  export default rootReducer;

