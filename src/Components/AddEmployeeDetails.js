import Adminpanel from "./AdminPanel";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { AppBar } from "@mui/material";
// import "./App.css";



function AddEmployeeDetails() {
  const [inputarr, setInputarr] = useState([]);
  const[Inputdata,setInputdata]=useState({employeeName:"",emailid:"",number:"",employeeId:"",EmployeePresent:"",Attendence:""});
 const[employeeName,setemployeeName]=useState("");
 const[emailid,setemailid]=useState("");
 const[number,setnumber]=useState("");
 const[employeeId,setemployeeId]=useState("");
 const[EmployeePresent,setPresent]=useState("");
 const[Attendence,setAttendence]=useState("");

  function changehandle() {
     setInputarr([...inputarr,{employeeName,emailid,number,employeeId,EmployeePresent,Attendence}])
    console.log(inputarr);
    console.log(Inputdata);
    setInputdata({employeeName:"",emailid:"",number:"",employeeId:"",EmployeePresent:"",Attendence})
  }
  var i = 1;
  return (

   
      <>
        <div>
          <h2>Employee Details</h2>
        </div>
        <Row className="tab">
          <Col lg={10} md={10} sm={10}>
            <div className="text-center">
              <Table className="list" id="storeList" striped bordered hover size="sm" style={{ color: "black" }}>
                <thead>
                  <tr>
                    <th>SL.No</th>
                    <th>Employee Name</th>
                    <th>Email Id</th>
                    <th>Mobile Number</th>
                    <th>Employee_Id</th>
                    <th>Employee Present</th>
                    <th>Attendence Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {inputarr.map((info, ind) => (


                    <tr key={ind}>
                      <td>{i++}</td>
                      <td>{info.employeeName}</td>
                      <td>{info.emailid}</td>
                      <td>{info.number}</td>
                      <td>{info.employeeId}</td>
                      <td>{info.EmployeePresent}</td>
                       <td>{info.Attendence}</td>
                      <td>
                        <Button className="removebtn" style={{ marginLeft: "5px" }} onClick={changehandle}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </>
   
  );
}

export default AddEmployeeDetails;
