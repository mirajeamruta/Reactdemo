import { Nav,Container,Navbar } from 'react-bootstrap';
import React from 'react';
import Adminsidebar from './Adminsidebar';

function Adminheader() {

    return (
      <div>
       <Navbar style={{backgroundColor:"rgb(137 135 135)",height:"85px",marginTop: "-62px"}}>
       
     <Container>
      <Navbar.Brand href="/admin/dashboard" style={{color:"black",fontSize:"20px"}}>
      </Navbar.Brand>
      <Nav.Link style={{color:"black"}}>
        <i class="fa fa-user-circle"></i>
       <h6> Admin</h6>
      </Nav.Link>
     </Container>
    </Navbar>
      </div>
    );
  }
  
  export default Adminheader;
  