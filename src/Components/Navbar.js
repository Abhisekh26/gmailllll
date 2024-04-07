import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';
function Navebar() {
  function signOutHandler(){
    localStorage.removeItem('userEmail')
    localStorage.removeItem('idToken')
    window.location.href="/login"
  }
 return (
    <div>

      {[false].map((expand) => (
        
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">

     
          <Container fluid>
            <NavLink to="/" style={{textDecoration:"none"}}>
            <Navbar.Brand >Mail Box</Navbar.Brand>
            </NavLink>
            <div className="d-flex justify-content-end flex-grow-1" >
               
                <NavLink to="/signup">
            <Button variant="secondary" className="me-2">Signup</Button>
            </NavLink>
           
       
            <NavLink to ="/login">
            <Button variant="secondary" className="me-2">Log In</Button>
            </NavLink>
          
                
           
            <Button variant="secondary"  onClick={signOutHandler}>Log Out</Button>
            
            </div>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} /> 
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mail Box
                </Offcanvas.Title> *
              </Offcanvas.Header> */}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/compose" style={{textDecoration:"none",color: "#666666"}}>Compose</NavLink>
                  <NavLink to="/inbox" style={{textDecoration:"none",color: "#666666"}}>Inbox</NavLink>
                  <NavLink to="/sentbox" style={{textDecoration:"none",color: "#666666"}}>Sent</NavLink>
                  <NavLink to="" style={{textDecoration:"none",color: "#666666"}}>Draft</NavLink>
                  {/* <Nav.Link href="#action2">Draft</Nav.Link> */}

                
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet></Outlet>
    </div>
  )
}

export default Navebar