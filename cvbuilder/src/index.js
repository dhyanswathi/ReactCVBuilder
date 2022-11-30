import React from 'react'; //{useContext}
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Form from './Components/Form';
import SignUp from './Components/Signup';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Templates from './Components/Templates';
import Resume from './Components/Resume';
import About from './Components/About';
import Resume2 from './Components/Resume2';
import Resume3 from './Components/Resume3';
import Resume4 from './Components/Resume4';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Welcome" element={<Welcome/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/Templates" element={<Templates/>} />
        <Route path="/Resume2" element={<Resume2/>} />
        <Route path="/Resume3" element={<Resume3/>} />
        <Route path="/Resume4" element={<Resume4/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

