import { Dropdown } from "bootstrap";
import React from "react";

const Boarding =()=>{
    return(
        <div>
            <p> Select your destination</p>
            <label>FROM:</label>
            <select>
                <option> US</option>
                <option> UK</option>
                <option> UAE</option>
            </select>
            <label>TO:</label>
            <select> 
                <option> US</option>
                <option> UK</option>
                <option> UAE</option>
            </select>
        </div>
    )
        
    
}
export default Boarding;