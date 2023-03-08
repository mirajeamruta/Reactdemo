
import React from "react";
import { Col, Row } from "react-bootstrap";
import Adminheader from "./Adminheader";
import Adminsidebar from "./Adminsidebar";
function AdminLayout(props){
    return(
        <div>
            <Adminheader />
            <div>
                <Row className="me-0">
                    <Col md={2}>
                        <Adminsidebar />
                         </Col>
                  
                    <Col style={{backgroundColor:""}}>
                    {props.childern}
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default AdminLayout;