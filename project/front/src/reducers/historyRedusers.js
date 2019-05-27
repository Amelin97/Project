import { SHOW_HISTORY_FAILURE, SHOW_HISTORY_REQEST, SHOW_HISTORY_SUCCSESS } from '../actions/types';

const INITIAL_STATE = {
    loading :false,
    data : [],
    err : null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case  SHOW_HISTORY_REQEST:
            return { ...state, loading: true }
        case SHOW_HISTORY_FAILURE:
            return { ...state, loading: false, err: action.payload }
        case SHOW_HISTORY_SUCCSESS:          
            return { ...state, loading: false, data: action.payload }
        
        default:
            return state
    }
}