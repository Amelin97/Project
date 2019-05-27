import {SIGN_IN , REGIST_USERS} from '../actions/types'


const INTIAL_STATE = {
    isSignedIn: null,
    userId: null,
    data: [],
    error: null
};


export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true , userId:action.payload }
       
        case REGIST_USERS:
            return {...state/*, payload*/}


        // case CHECK_TOKEN_REQUEST: {
        //     return {
        //         ...state,
        //         loadingCheckToken: true,
        //     }
        // }
        // case CHECK_TOKEN_SUCCESS: {
        //     return {
        //         ...state,
        //         authenticated: true
        //     }
        // }
        // case CHECK_TOKEN_FAILURE: {
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        // }


        default:
            return state;
    }
}