import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// global configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';   
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';  // default, no need to set it exclusively

// if global config is not same throughout project(eg:- baseURL, headers differ for some requests then we can create axios instances as below)

// interceptors through which each request has to go through
axios.interceptors.request.use(request => {
    console.log(request);
    // request(Request config) can also be edited.
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);   // this error occurs when sending request fails like no internet connection.
})

axios.interceptors.response.use(response => {
    console.log(response);
    return response;          
}, error => {
    console.log(error);
    return Promise.reject(error);   // We can reject here & handle them locally within a component in catch() block.
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
