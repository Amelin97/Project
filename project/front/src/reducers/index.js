import { combineReducers } from 'redux';
import authRedusers from './authRedusers';
import {reducer as FormReducer} from 'redux-form';
import weatherRedusers from './weatherRedusers';
import historyRedusers from './historyRedusers';
 import historyItemRedusers from './historyItemRedusers' 

export default combineReducers ({
    auth : authRedusers,
    form : FormReducer ,
    weather : weatherRedusers,
    historyWeather : historyRedusers,
    historyItem : historyItemRedusers 

})