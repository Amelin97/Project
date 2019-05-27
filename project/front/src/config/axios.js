import axios from 'axios';

 export const instance = axios.create({
    baseURL: 'http://localhost:8000'
})

instance.interceptors.request.use(function(config) {
     const token = window.localStorage.getItem('token');
     //console.log(token)
    if ( token != null ) {
    //   console.log(token)
       config.headers.token = token;
     //  console.log(config.headers)

    }
    
    return config;
  }, function(err) {
    return Promise.reject(err);
  });




  export const weatherinstance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
});