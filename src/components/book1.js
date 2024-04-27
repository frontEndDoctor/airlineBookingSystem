import React, { useState } from 'react';
import "../styles.css"
import Logo from "../app_logo.png";
//import Payment from "./Payment";
import { Dropdown, DropdownButton } from 'react-bootstrap';;


const book1 =()=>{
    const [formData, setFormData] = useState();
    //To handle the event that occurs when each of the stated variable above is assigned a value
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Some extra logic is needed here to fetch and receive data to and fro an API
      };
  
       
        
    //here goes to jsx to be displayed on the viewport



    return (
        <div>
                      <form onSubmit={handleSubmit} className='formInfo'>
                          <h3>Personal Details</h3>

                          <span className='inputHolder'>
                            <label className='inputLabel'>First Name: </label>
                            <input className='inputItem' type='text' required/>
                          </span>

                          <span className='inputHolder'>
                            <label className='inputLabel'>Last Name: </label>
                            <input className='inputItem' type='text' required/>
                          </span>
                          <span className='inputHolder'>
                            <label className='inputLabel'>Email Address:</label>
                            <input  className='inputItem' type='email' placeholder='Enter your email address' required/>
                          </span>
                    </form>
                    <button>Next</button>
            </div>
    )
}
export default book1;