import React, { useState } from 'react';
import "../styles.css"



const Book2 =()=>{
     // firstly, declare the necessary variables for entering travel details. Don't forget to set them as empty i.e ' '
     const [formData, setFormData] = useState({
        departureCity: '',
        destinationCity: '',
        departureDate: '',
        returnDate: '',
        passengers: 1,
  
      });
    

    //Secondly,we'll handle the event that occurs when each of the stated variable above is assigned a value
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

    return(
        <div>
            <form onSubmit={handleSubmit} className='formInfo'> 
                <h3>Travel Information</h3>
                      <span className='inputHolder'>
                        <label className='inputLabel' htmlFor="departureCity">Departure City:</label>
                        <input className='inputItem'
                        type="text"
                        id="departureCity"
                        name="departureCity"
                        value={formData.departureCity}
                        onChange={handleChange}
                        required
                        />
                      </span>
                      <span className='inputHolder'>
                        <label className='inputLabel' htmlFor="destinationCity">Destination City:</label>
                        <input className='inputItem'
                        type="text"
                        id="destinationCity"
                        name="destinationCity"
                        value={formData.destinationCity}
                        onChange={handleChange}
                        required
                        />
                      </span>


                      <span className='inputHolder'>
                        <label className='inputLabel' htmlFor="departureDate">Departure Date:</label>
                        <input className='inputItem'
                        type="date"
                        id="departureDate"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                        />
                      </span>
                    <span className='inputHolder'>
                      <label className='inputLabel' htmlFor="returnDate">Return Date:</label>
                      <input className='inputItem'
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      />
                    </span>
                    <span className='inputHolder'>
                      <label className='inputLabel' htmlFor="passengers">Passengers:</label>
                      <input className='inputItem'
                      type="number"
                      id="passengers"
                      name="passengers"
                      value={formData.passengers}
                      min={1}
                      max={10}
                      onChange={handleChange}
                      required
                      />
                    </span>
                </form>
                <span>
                <button className="getStarted"> <a href=' /book1 ' >Previous</a></button>   
                <button className="getStarted"> <a href=' /book3 ' >Next</a></button> 
                </span>
        </div>
        
    )


}

export default Book2;