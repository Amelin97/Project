//import axios from 'axios';
import {
    GET_WEATHER_FAILURE,
    GET_WEATHER_SUCCSESS,
    GET_WEATHER_REQEST,
    SHOW_HISTORY_FAILURE,
    SHOW_HISTORY_REQEST,
    SHOW_HISTORY_SUCCSESS,
    SHOW_HISTORY_ITEM_FAILURE,
    SHOW_HISTORY_ITEM_REQEST,
    SHOW_HISTORY_ITEM_SUCCSESS
  
} from './types'
import { instance, weatherinstance } from '../config/axios';




export const addWeather = (coords) => async (dispatch) => {


    dispatch({ type: GET_WEATHER_REQEST })
    try {
        const weatherResponse = await weatherinstance.get(`forecast?lat=${coords.lat}&lon=${coords.lng}1&APPID=5fb0e9ed4096c27c781250ee3940f836`)
        dispatch({ type: GET_WEATHER_SUCCSESS, payload: weatherResponse.data })
        // console.log("THIS IS RESPONS",weatherResponse)
    } catch (err) {
        dispatch({ type: GET_WEATHER_FAILURE, payload: err })
    }

}

export const saveToHistory = (list) => async (dispatch) => {

    try {
        await instance.post('/api/history', list)
    } catch (err) {
        dispatch({ type: GET_WEATHER_FAILURE, payload: err })
    }
}

export const showToHistroy = () => async (dispatch) => {
    dispatch({ type: SHOW_HISTORY_REQEST })
    try {
        const response = await instance.get('api/history')
       // console.log(response.data)
        dispatch({ type: SHOW_HISTORY_SUCCSESS, payload: response.data })

    } catch (err) {
        dispatch({ type: SHOW_HISTORY_FAILURE, payload: err })
        console.log('errr', err)
    }
}
    export const showToHistroyItem = (id) => async (dispatch) => {
    dispatch({ type: SHOW_HISTORY_ITEM_REQEST })
    console.log("ID::" ,id)
    try {
        const response = await instance.get(`api/history/${id}`,id)
        dispatch({ type: SHOW_HISTORY_ITEM_SUCCSESS, payload: response.data })
        console.log('item::::::::',response.data)
    } catch (err) {

        dispatch({ type : SHOW_HISTORY_ITEM_FAILURE , payload: err})
        console.log(err)
    }

}

