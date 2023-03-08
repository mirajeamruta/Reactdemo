import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu, ProSidebarProvider, SidebarContent, Sidebar } from 'react-pro-sidebar';

function Adminsidebar() {

  return (
    <>
      <div className="w3-sidebar w3-light-grey w3-bar-block" style={{
        width: "25%", display: "grid", backgroundColor: "black",
        color: "white", width: "223px"
      }}>
        <h3 className="w3-bar-item">Employee Details</h3>
        <Link to="addemployeedetails" className="w3-bar-item w3-button" style={{ Display: "block", textDecoration: "auto", color: "whitesmoke" }}>Employee Attendence Details</Link>
         <Link to="charts" className="w3-bar-item w3-button" style={{ Display: "block", textDecoration: "auto", color: "whitesmoke" }}></Link>
      </div>
      <Outlet></Outlet>

    </>
  );
}

export default Adminsidebar;
