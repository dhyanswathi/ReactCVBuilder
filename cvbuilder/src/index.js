import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SignUp from './Components/Signup';
import Form from './Components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Form" element={<Form/>} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
