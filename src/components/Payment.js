
import React, { useState } from 'react';
import Debit from '../debit.jpg';
import '../styles.css';




const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The logic for processing   payment goes here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='payment'>
       
        <main className='formPay'>
            <h1 className='pay1'>Pay For Your Trip</h1> 
            <form onSubmit={handleSubmit} className='formInfo'>
      
                <span className='inputHolder'>
                <label className='inputLabel'>Card Name:</label>
                    <input className='inputItem'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='type in the name on the card'
                    />
                </span> 
        
                <span className='inputHolder'>
                <label className='inputLabel'> Amount:</label>
                <input className='inputItem'
                    type="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
                </span>
            <span className='inputHolder'>
            <label className='inputLabel'>Card Number:</label>
            <input className='inputItem'
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
            />
            </span>
            <span className='inputHolder'>
            <label className='inputLabel'>Expiry Date:</label>
            <input className='inputItem'
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
            />
            </span>
            <span className='inputHolder'>
            <label className='inputLabel'>CVV:</label>
            <input className='lastItem'
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                min="3"
                max="3"
            />
            </span>
            <button type="submit"className='payFlight'>Complete</button>
            
      </form>
             
        </main>
        <img src={Debit} alt="" className="pay" /> 
      
    </div>
  );
};

export default Payment;

    
    // return(
       

    //     <div>
    //         {/* This component will contain a payment form  */}
    //         {/* It is from here that the booking pass will be sent to the user */}
    //         <p> Thanks for booking! Kindly check your email for the booking pass or click
    //             <a href=""> here</a> to download</p>

    //     </div>

    // )


