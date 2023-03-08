
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {

    return (
      <>
     {/* <div className="nav"> */}
      <Navbar className="nav1"style={{ position:"fixed",
    zindex: "1",
    width: "100%"}}>
      <Container >
        <Navbar.Brand ></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/employee" style={{color: "black;",fontSize: "larger"}}>Home</Nav.Link>
          <Nav.Link  as={Link} to="/calender"style={{color: "black;",fontSize: "larger",marginLeft: "40px"}}>Calendar</Nav.Link>
          <Nav.Link as={Link} to="/chart"style={{color: "black;",fontSize: "larger",marginLeft: "40px"}}>Chart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    {/* </div> */}
    </>
    );
  }
  
  export default Header;
  