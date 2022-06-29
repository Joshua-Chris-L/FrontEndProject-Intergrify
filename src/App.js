import React from "react";
import './App.css';
import Countries from './Pages/Countries';
import Button from './Pages/Button';
import ErrorPage from "./Pages/Errorpage";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
         
         <Routes>  
                <Route path="/" element= {<Button />} />
                <Route path="/countries" element= {<Countries />} />
                <Route path="*" element={<ErrorPage />} />
            
         </Routes>

    </Router> 
   
  );
}



export default App;
