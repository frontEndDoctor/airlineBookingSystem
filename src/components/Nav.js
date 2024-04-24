import React from "react";
import Logo from "../app_logo.png";
import "../styles.css";
import { Navbar,NavItem} from 'react-bootstrap';


const Nav =()=> {
    return (
        <div>
            
            <Navbar  variant="dark" expand="lg" color="white">
                <img src={Logo} alt="SwiftAir Logo" className="appLogo" href="#"/>
                <ul >
                    <NavItem className="navItem"><a href="/">Home</a></NavItem>
                    <NavItem className="navItem"><a href="/about">About</a></NavItem>
                    <NavItem className="navItem"><a href="/contact">Contact</a></NavItem>
                
                </ul>
            </Navbar>



            

        </div>
    )
}


export default Nav;
// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

// const Navigation = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <LinkContainer to="/">
//         <Navbar.Brand>Airline Booking</Navbar.Brand>
//       </LinkContainer>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <LinkContainer to="/booking">
//             <Nav.Link>Booking</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/board">
//             <Nav.Link>Board</Nav.Link>
//           </LinkContainer>
//         </Nav>
