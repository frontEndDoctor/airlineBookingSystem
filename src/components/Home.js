import React from "react";
import Nav from "./Nav";
import "../styles.css"





const Home=() => {
    return(
        <div className="homePage">        
            <header>
                <Nav/>
                <h3 className="welCome">Find & Book a great experience</h3>
                <p>Enjoy 20% discount on your first booking</p>
                        
            </header>       
            <button className="getStarted"> <a href='/booking' >Get Started</a></button> 
               
           
             
            
        </div>
    )
        

    
}
export default Home;

