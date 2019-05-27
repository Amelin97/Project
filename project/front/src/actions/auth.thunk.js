
import { instance } from '../config/axios';
import history from '../history';
import { SIGN_IN, REGIST_USERS } from './types';





export const createUser = formValues => async (dispatch) => {

  const response = await instance.post('/auth/register', formValues);

  dispatch({ type: REGIST_USERS, payload: response.data })

  history.push('/login')


}

export const signIn = formValues => async (dispatch) => {
  const response = await instance.post('/auth/login', formValues);

  dispatch({ type: SIGN_IN, payload: response.data })
  //  console.log(response.data)
  window.localStorage.setItem('token', response.data)
  history.push('/')
}


// export const checkToken = async () => {
//     return new Promise((resolve, reject) => {
//         return instance.post('/auth/checkToken' )
//         .then((res) => {
//             resolve(res)
//         })
//         .catch((err) => {
//             reject(err)
//         })
//     })
//         try {
//             /////// dispatch ({type : CHECK_TOKEN_REQUEST , payload:response.data})


//             // const response = await axios.post('/auth/checkToken' );



//         } catch (err) {
//             // dispatch ({type : CHECK_TOKEN_FAILURE , payload:response.data})

//         }
// }
