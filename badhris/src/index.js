import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './components/signup/index';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/fonts/icomoon/selection.json"
import { BrowserRouter as Router, Route, Link, NavLink, Routes, useMatch } from 'react-router-dom'
import ConfirmEmail from './components/confirmEmail';  
import Login from './components/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
const MainApp = () => {
  return(
    <Router>
      <Routes>  
         <Route exact path="/" element={<Signup/>} />  
         <Route path="/login" element={<Login/>} />
         <Route path= "/confirmemail/:id" element={<ConfirmEmail/>} />    
      </Routes>
    </Router> 
  )
}
  root.render(<MainApp/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
