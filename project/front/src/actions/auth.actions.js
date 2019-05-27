import SIGN_OUT from './types';
import {signIn} from './auth.thunk'


export const signOut = () => {
    return {
        type : SIGN_OUT
    }
} 
// action
export const logIn = (params) => {
    return  dispatch  => {
        dispatch(signIn)
    }
}

// thunks
