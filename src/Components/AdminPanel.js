import React from "react";
import Adminsidebar from "./Adminsidebar";
import Adminheader from "./Adminheader";
import { Col, Container, Row } from "react-bootstrap";
import { Box } from "@mui/material";
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Adminpanel() {

  return (

    <>
      <Adminheader />
      <Row>
        <Col md={3} style={{
          backgroundColor: "black",
        
        }}>
          <Container style={{
            textAlign: "center", marginTop: "20px"
          }}>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="adminpanel/addemployeedetails" style={{
                color: "white"
              }}>Attendence Details</Nav.Link>
              <Nav.Link as={Link} to="adminpanel/charts" style={{
                color: "white"
              }}>Charts</Nav.Link>
            </Nav>
          </Container></Col>
        <Col md={9} ><Outlet></Outlet></Col>
      </Row>





    </>

  );
}

export default Adminpanel;
