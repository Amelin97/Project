import { GET_WEATHER , SHOW_HISTORY } from './types';
import { addWeather } from './weather.thunk';
import { showToHistroy } from './weather.thunk'


export const addWeather = () => {
    return {
        type: GET_WEATHER, payload: action.payload
    }
}
export const showToHistroy = () => {
    return {type: SHOW_HISTORY , payload: action.payload}
}
