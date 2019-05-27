
import {
    GET_WEATHER_FAILURE, GET_WEATHER_REQEST, GET_WEATHER_SUCCSESS ,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    data: [],
    err: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_WEATHER_REQEST:
            return { ...state, loading: true }
        case GET_WEATHER_FAILURE:
            return { ...state, loading: false, err: action.payload }
        case GET_WEATHER_SUCCSESS:          
            return { ...state, loading: false, data: action.payload }
        
        default:
            return state
    }
}