import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
// import './normalize.css';
// import './skeleton.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

// axios.defaults.baseURL = '//localhost:3000/api';
let userData = JSON.parse(localStorage.getItem("userData"))
let token
if (userData) {
  token = userData.token
}
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';axios.interceptors.request.use(request => {
  return request;
}, 
error => {
  //  console.log(error);
  return Promise.reject(error);
});
axios.interceptors.response.use(response => {
  return response;
},
 error => {
  console.log(error.response);
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

reportWebVitals();
