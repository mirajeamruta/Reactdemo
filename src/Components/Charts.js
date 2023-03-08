import { Bar } from "react-chartjs-2";
import React from "react";
import { registerables } from 'chart.js';

import { CategoryScale, Chart } from "chart.js";
import { Card, Col, Container, Row } from "react-bootstrap";
Chart.register(...registerables);
Chart.register(CategoryScale);


function Charts() {

  return (
    <div className='bg1'>
   <div className="chart container">
    <div className="chart"  >

      <Row className="box" >

      <h3 style={{ textAlign: "center",paddingTop: "122px" }}>Emplyoyee Attendence details chart</h3>
       

        <Col md={{span: 8, offset:2}}>
          <div >
            <Bar
              data={{
                // Name of the variables on x-axies for each bar
                labels: ["Present Employee", "Absent Employee"],
                color: ["black"],

                datasets: [
                  {
                    // Label for bars
                    label: "total count/value",
                    // Data or value of your each variable
                    data: [2, 3],
                    // Color of each bar
                    backgroundColor: ["green", "#FF7518"],
                    // Border color of each bar
                    borderColor: ["green", " #FF7518 "],
                    borderWidth: 0.5,

                    color: ["black"],
                  },
                ],
              }}
              // Height of graph
              height={400}
              width={400}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        // The y-axis value will start from zero
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 20,
                  },
                },
              }}
            />
          </div>
        </Col>
        <Col md={2}>

          <div >
            <h6 style={{ color: "green" }}>Present : {2} </h6>
            <h6 style={{ color: "red" }}>Absent : {3} </h6>
          </div>
        </Col>


      </Row>

    </div>
    </div>
    </div>
  );
}

export default Charts;
