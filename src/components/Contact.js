import { React } from "react";
import Logo from "../app_logo.png";
import "../styles.css";
import { Navbar,NavItem} from 'react-bootstrap';



const Contact =()=>{

return(
    <div className="">
             <Navbar  variant="dark" expand="lg" color="blue">
                <img src={Logo} alt="SwiftAir Logo" className="appLogo" href="#"/>
                <ul>
                    <NavItem className="navItem"><a href="/">Home</a></NavItem>
                    <NavItem className="navItem"><a href="/about">About</a></NavItem>
                    <NavItem className="navItem"><a href="/contact">Contact</a></NavItem>
                
                </ul>
            </Navbar>
            <div>
            <h1>Hi There</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, id possimus dolores fugit sint asperiores doloremque iure ratione illum dicta
                laudantium obcaecati culpa, optio ex maxime sed tempore voluptatibus consequuntur?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, id possimus dolores fugit sint asperiores doloremque iure ratione illum dicta
                laudantium obcaecati culpa, optio ex maxime sed tempore voluptatibus consequuntur?</p>
            
        </div> 
    </div>
)


}


export default Contact;