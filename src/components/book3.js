import { React,useState } from 'react';
import "../styles.css"
//import Payment from "./Payment";
import { Dropdown, DropdownButton } from 'react-bootstrap';;


const book3 =()=>{
    const [formData, setFormData] = useState();
    const [selectedClass, setSelectedClass] = useState('');
      
    const handleClassSelect = (classType) => {
      setSelectedClass(classType);}

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






    return (
        <div>
            <form onSubmit={handleSubmit} className='formInfo'>
                    <h3>Traveler's Details</h3>
                    <span className='inputHolder'>
                      <label className='inputLabel'>Passport Number:</label>
                      <input  type='text'/>
                    </span>

                    <span className='inputHolder'>
                      <label className='inputLabel'>Passport Expiry Date:</label>
                      <input className='inputItem' type='text'/>
                    </span>
                    {/* Here the user selects his flight class and the respective amount is meant to popup upon 
                    selection of class either on this booking page or in the payment page automatically*/}
                    <span className='inputHolder'>
                      <label className='inputLabel'>Select Flight Class</label>
                      <DropdownButton 
                        title={`${selectedClass}`}
                        variant="info"
                        onSelect={handleClassSelect}
                      >
                        <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
                        <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
                        <Dropdown.Item eventKey="First Class">First Class</Dropdown.Item>
                      
                      </DropdownButton>

                    </span>
                </form>
                <button type='submit'>Next</button>

    
        </div>
    )



}

export default book3;