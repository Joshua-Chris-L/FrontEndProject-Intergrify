import React from "react";
import {useNavigate} from "react-router-dom";
import "../App.css";



function Button () {
    let navigate = useNavigate();
    return (
        <div className="App">
            <p> Nice displays of countries. Click me to get a view </p> 
            <button className="button" onClick={
                () => {
                    navigate("/countries");
                }
            }>  
            Click Me </button>
        </div>
    )
}

export default Button;
