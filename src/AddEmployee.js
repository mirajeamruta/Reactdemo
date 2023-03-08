import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


function AddEmployee() {
  const [Inputdata, setInputdata] = useState({ employeeName: "", emailid: "", number: "", employeeId: "", entitySelection: "", Attendence: "" });
  const [inputarr, setInputarr] = useState([]);
  // const [noOfRows, setNoOfRows] = useState(1);
  function changehandle(e) {
    setInputdata({ ...Inputdata, [e.target.name]: e.target.value })

  }


  let { employeeName, emailid, number, employeeId, entitySelection, Attendence } = Inputdata;
  function changehandle1() {
    setInputarr([...inputarr, { employeeName, emailid, number, employeeId, entitySelection, Attendence }])
    // console.log(inputarr);
    console.log(Inputdata);
    setInputdata({ employeeName: "", emailid: "", number: "", employeeId: "", entitySelection: "", Attendence: "" })
    // alert("Fill the All Fields");
    // window.location = "/adminpanel/adminpanel/addemployeedetails";
  }

//  const handleDeleteClick=(inputarr)=>{
   
//     setInputarr(inputarr);
//  }

const deleteTableRows = (info)=>{
  const Inputdata = [...inputarr];
  Inputdata.splice(info, 1);
  setInputarr(Inputdata);
}
  
  var i = 1;
  return (
    <div className="container-fluid" style={{
      marginTop: "0px",
      backgroundColor: "rgb(190 188 186)", height: "660px"
    }}>
      <Row style={{ paddingTop: "96px" }}>
        <Col md={5}>
          <h3 style={{ textAlign: "center", paddingBottom: "21px" }}>Employee Attendence Details</h3>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-4 col-form-label">Employee Name:</label>
            <div className="col-sm-8">
              <input className="form-control" type="text" placeholder="Enter Name" id="" name="employeeName" value={Inputdata.employeeName} onChange={changehandle} ></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" className="col-sm-4 col-form-label">Email_Id :</label>
            <div className="col-sm-8">
              <input className="form-control" type="text" placeholder="Enter Email" id="" name="emailid" value={Inputdata.emailid} onChange={changehandle} ></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-4 col-form-label">Mobile Number :</label>
            <div className="col-sm-8">
              <input className="form-control" type="tel" placeholder="Enter Mobile Number" id="" name="number" value={Inputdata.number} onChange={changehandle}></input>
            </div>
          </div>
          {/* <fieldset> */}
          <Form.Group as={Row} className="mb-2">
            <Form.Label as="legend" column sm={4}>
              Employee Present :
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="radio"
                label="Present"
                name="entitySelection"
                id="yes"
                value="present" onChange={changehandle}
              />
              <Form.Check
                type="radio"
                label="Absent"
                name="entitySelection"
                id="no"
              
                value="absent" onChange={changehandle}
              />

            </Col>
          </Form.Group>


          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-4 col-form-label">Employee_Id :</label>
            <div className="col-sm-8">
              <input className="form-control" type="text" placeholder="Enter Employee Id" id="" name="employeeId" value={Inputdata.employeeId} onChange={changehandle}></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-4 col-form-label">Attendence Date :</label>
            <div className="col-sm-8">
              <input className="form-control" type="date" placeholder="Due Date" id="" name="Attendence" value={Inputdata.Attendence} onChange={changehandle}></input>
            </div>
          </div>
          {/* <Link to="/adminpanel/adminpanel/addemployeedetails">  */}
          <Button variant="primary" type="submit" value="Submit" style={{
            marginLeft: "238px",
            marginTop: "42px", width: "168px", marginBottom: "17px"
          }} onClick={changehandle1}>
            SUBMIT
          </Button>
          {/* </Link> */}


        </Col>
        <Col md={7}>

          <div className="App">
            <div className="deatils2">

              <h2 style={{ textAlign: "center" }}>Employee Details</h2>



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
                        <td>{info.entitySelection}</td>
                        <td>{info.Attendence}</td>
                    
                        <td>
                     
                          <Button className="removebtn" type="button" value="Delete Row"  style={{ marginLeft: "5px" }}  onClick={()=>(deleteTableRows(info))}>
                            Remove
                          </Button>
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
// </Card>



  );




}

export default AddEmployee;
