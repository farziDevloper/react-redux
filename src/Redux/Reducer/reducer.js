import { FETCH_DATA, FETCH_FAIL, FETCH_SUCCESS } from "../actionTypes";

const intialState = {
    loading: false,
    data: [],
    error : null
}

export const dataReducer = (state = intialState , action) => {
    switch(action.type ) {
        case FETCH_DATA : 
            return{ ...state , loading:true}
        case FETCH_SUCCESS: 
            return {...state , loading:false , data : action.payload}
        case FETCH_FAIL : 
            return {...state , loading: false , error : action.payload};

            default :
                return state
    }
}