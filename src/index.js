import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authprovider from './Context/Authprovider';
//import "./i18n"; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Authprovider>
    
    </Authprovider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
