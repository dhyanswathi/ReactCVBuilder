import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SignUp from './Components/Signup';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Resume from './Components/Resume';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Welcome" element={<Welcome/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Resume" element={<Resume/>} />
      </Routes>
    </Router>
    <Footer></Footer>
  </React.StrictMode>
);
reportWebVitals();