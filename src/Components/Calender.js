import React, { useState } from 'react';
import { Button, Card, CardGroup, Col, Modal, Row, Table } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { mockComponent } from 'react-dom/test-utils';
import moment from "moment";


function Calender(props) {


  const [inputarr, setInputarr] = useState([]);
  const [Inputdata, setInputdata] = useState({ employeeName: "", emailid: "", number: "", employeeId: "", EmployeePresent: "", Attendence: "" });
  const [employeeName, setemployeeName] = useState("");
  const [emailid, setemailid] = useState("");
  const [number, setnumber] = useState("");
  const [employeeId, setemployeeId] = useState("");
  const [EmployeePresent, setPresent] = useState("");
  const [Attendence, setAttendence] = useState("");const [date, setdate] = useState(new Date());
  const [value, OnChange] = useState(new Date());

  var i = 1;



  function changehandle() {
    setInputarr([...inputarr, { employeeName, emailid, number, employeeId, EmployeePresent, Attendence }])
    console.log(inputarr);
    console.log(Inputdata);
    setInputdata({ employeeName: "", emailid: "", number: "", employeeId: "", EmployeePresent: "", Attendence })
  }

  const deleteTableRows = (info)=>{
    const Inputdata = [...inputarr];
    Inputdata.splice(info, 1);
    setInputarr(Inputdata);
  }
    

  return (
    <div className='bg'>
      <div className='cale container'>
        <Row className='design'>

          <Col md={4}>

            <div className='details1'>
              <h2 style={{ textAlign: "center" }}>Calender Details</h2>
            </div>
            <div className='react' style={{}}>
              <Calendar className="calender" id="calender"  
                placeholder="Select a range"
              
               
                onChange={OnChange}

                value={value}

              // selectRange={true}
              />

            </div>
            {/* <Datepicker
    controls={['calendar']}
    select="preset-range"
    firstSelectDay={1}
    selectSize={7}
/> */}
{/* <Datepicker
    select="range"
    rangeHighlight={true}
    showRangeLabels={true}
/> */}



            <Row className='row'>

              {date.length > 0 ? (
                <p className='text-center'>
                  <span className='bold'>Start:</span>{' '}
                  {date[0].toDateString()}
                  &nbsp;|&nbsp;
                  <span className='bold'>End:</span> {date[1].toDateString()}
                </p>
              ) : (
                <p className='text-center'>
                  <span className='bold'>Default selected date:</span>{' '}
                  {date.toDateString()}
                </p>
              )}

            </Row>

          </Col>

          <Col md={8}>
            <div className="App" style={{}}>
              <div className="deatils">
                <div style={{

                  color: "black"
                }}>

                  <h2 style={{ textAlign: "center", paddingBottom: "6px" }}>Employee Details</h2>
                </div>

                <Row className="tab">
                  <Col lg={9} md={9} sm={9}  >
                    <div className="text-center">
                      <Table striped bordered hover size="sm">

                        <thead>
                          <tr>
                            <th>Sr.No</th>
                            <th>Employee Name</th>
                            <th>Email_Id</th>
                            <th>Mobile Number</th>
                            <th>Employee_Id</th>
                            <th>Employee Present</th>
                            <th>Attendence Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {moment(value).format("DD/MM/YYYY") === "01/02/2023" ?
                              <>
                                <tr >
                                  <td>{i++}</td>
                                  <td>amruta</td>
                                  <td>amrutagmail.com</td>
                                  <td>9876545678</td>
                                  <td>AB01</td>
                                  <td>Present</td>
                                  <td>1/02/2023</td>

                                  <td>
                                    <Button className="removebtn" style={{ marginLeft: "5px" }} onClick={()=>(deleteTableRows())} >
                                      Remove
                                    </Button>
                                  </td>

                                </tr>
                              </>
                              :
                              moment(value).format("DD/MM/YYYY") === "02/02/2023" ?
                                <>
                                  <tr>
                                    <td>{2}</td>
                                    <td>namruta</td>
                                    <td>namrutagmail.com</td>
                                    <td>9876545678</td>
                                    <td>AC02</td>
                                    <td>Absent</td>
                                    <td>2/02/2023</td>
                                    <td>
                                      <Button className="removebtn" style={{ marginLeft: "5px" }} onClick={()=>(deleteTableRows())} >
                                        Remove
                                      </Button>
                                    </td>
                                  </tr>
                                </>
                                :
                                moment(value).format("DD/MM/YYYY") === "03/02/2023" ?
                                  <>
                                    <tr>
                                      <td>{3}</td>
                                      <td>Shilpa</td>
                                      <td>shilpagmail.com</td>
                                      <td>9876545678</td>
                                      <td>AD03</td>
                                      <td>Present</td>
                                      <td>3/02/2023</td>
                                      <td>
                                        <Button className="removebtn" style={{ marginLeft: "5px"  }} onClick={()=>(deleteTableRows())} >
                                          Remove
                                        </Button>
                                      </td>
                                    </tr>
                                  </>

                                  : moment(value).format("DD/MM/YYYY") === "04/02/2023" ?
                                    <>
                                      <tr>
                                        <td>{4}</td>
                                        <td>Diksha</td>
                                        <td>dikshagmail.com</td>
                                        <td>9876545678</td>
                                        <td>AA04</td>
                                        <td>Absent</td>
                                        <td>4/02/2023</td>
                                        <td>
                                          <Button className="removebtn" style={{ marginLeft: "5px" }} onClick={()=>(deleteTableRows())} >
                                            Remove
                                          </Button>
                                        </td>
                                      </tr>
                                    </>
                                    : moment(value).format("DD/MM/YYYY") === "05/02/2023" ?
                                      <>
                                        <tr>
                                          <td>{5}</td>
                                          <td>Sandesh</td>
                                          <td>sandeshgmail.com</td>
                                          <td>9876545678</td>
                                          <td>AC05</td>
                                          <td>Absent</td>
                                          <td>5/02/2023</td>
                                          <td>
                                            <Button className="removebtn" style={{ marginLeft: "5px" }} onClick={()=>(deleteTableRows())}  >
                                              Remove
                                            </Button>
                                          </td>
                                        </tr>
                                      </>


                                      : ""
                            }

                            {date.length > 0 ? (

                              inputarr.map((info, ind) => (
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
                              ))

                            ) : (
                              ""
                            )}
                          </>

                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Calender;
