import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Signup from '../Signup/Signup';
import '../Navbar/Navbar.css';



function Navbars() {
    return (
        <div>
        <section className="navbar-section">
        <Navbar expand="md" sticky="top">
  <Container>
    <Navbar.Brand className="navbar-brand" href="#home">
      Thrift
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className="nav-link" style={{fontWeight: "700"}}>Home</Nav.Link>
        <Nav.Link href="#link" className="nav-link">About</Nav.Link>
      </Nav>

      <Nav className="ms-auto">
        <Signup />
        <Button className="navbar-btn nbtn-2">Sign In</Button>
      </Nav>
     
     
        
        
        
    </Navbar.Collapse>
  </Container>
</Navbar>
        </section>
            
        </div>
    )
    
}

export default Navbars;
