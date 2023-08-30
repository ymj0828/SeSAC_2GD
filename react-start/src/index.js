import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test1 from './Test1';
// import reportWebvitals from './reportWebvitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test1 text = '안녕'/>
  </React.StrictMode>
);
