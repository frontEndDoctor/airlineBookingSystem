import React, { useState } from 'react';
import "../styles.css"
import Logo from "../app_logo.png";
//import Payment from "./Payment";
// import { Dropdown, DropdownButton } from 'react-bootstrap';;
// import book1 from './book1';
// import book2 from './book2';
// import book3 from './book3';





const Booking=()=>{
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage =()=>{
    setCurrentPage(currentPage+1);
  };
  const showPage=()=>{
    switch (currentPage) {
      case 1:
        return < book1 nextPage ={nextPage}/>
      case 2:
        return < book2 nextPage ={nextPage}/>
    case 3:
          return < book3/>

      default:
        break;
    }
  }
  return(
    <div className="">
      <img src={Logo} alt='logo' className='swLogo'/>
      <h1> BOOK YOUR FLIGHT</h1>
      {showPage()}

    </div>
  )
}

export default Booking;














    // // firstly, declare the necessary variables for entering travel details. Don't forget to set them as empty i.e ' '
    // const [formData, setFormData] = useState({
    //     departureCity: '',
    //     destinationCity: '',
    //     departureDate: '',
    //     returnDate: '',
    //     passengers: 1,
  
    //   });
      // const [selectedClass, setSelectedClass] = useState('');
      
      // const handleClassSelect = (classType) => {
      //   setSelectedClass(classType);}

    //Secondly,we'll handle the event that occurs when each of the stated variable above is assigned a value
      // const handleChange = (e) => {
      //   const { name, value } = e.target;
      //   setFormData((prevData) => ({
      //     ...prevData,
      //     [name]: value
      //   }));
      // };

      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   console.log('Form submitted:', formData);
        // Some extra logic is needed here to fetch and receive data to and fro an API
      // };
  
       
        
    //here goes to jsx to be displayed on the viewport
    // return(
        // <div className='bookingForm1'>
        //       <img src={Logo} alt='logo' className='swLogo'/>
        //       <h1> FLIGHT BOOKING</h1>
               
                
        //         <main className='bookingForm2 '>
                    /* <h3>FLIGHT BOOKING </h3>
                      <form onSubmit={handleSubmit} className='formInfo'>
                          <h5>Personal Details</h5>

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
                          </span> */
                        
                      /* <h5>Travel Information</h5>
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
                    </span> */

                    // <hr/>
                    /* <h5>Traveler's Details</h5>
                    <span className='inputHolder'>
                      <label className='inputLabel'>Passport Number:</label>
                      <input  type='text'/>
                    </span>

                    <span className='inputHolder'>
                      <label className='inputLabel'>Passport Expiry Date:</label>
                      <input className='inputItem' type='text'/>
                    </span>
                    {/* Here the user selects his flight class and the respective amount is meant to popup upon 
                    selection of class either on this booking page or in the payment page automatically*/
                    // <span className='inputHolder'>
                    //   <label className='inputLabel'>Select Flight Class</label>
                    //   <DropdownButton 
                    //     title={`${selectedClass}`}
                    //     variant="info"
                    //     onSelect={handleClassSelect}
                    //   >
                    //     <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
                    //     <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
                    //     <Dropdown.Item eventKey="First Class">First Class</Dropdown.Item>
                      
                    //   </DropdownButton>

                    // </span> 

                    /* <span className='inputHolder'>
                      <label className='inputLabel'>Additional Information</label>
                      <input className='inputItem'  type='text-box' max-width='50px' max-height='200px'/>
                    </span> */

                   

                  // <button type="submit" className='bookFlight'>  <a href='/payment'>Book Flight</a></button>
                  /* After this button is clicked, the customer should receive a list of available flights before confirming booking and moving on to payment */
              // </form>
            
        // </main>
           
        // </div>

//     )
// }

