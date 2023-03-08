import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Adminsidebar from './Components/Admin/Adminsidebar';
// import Adminheader from './Components/Admin/Adminheader';
// import AdminPanel from './Components/Admin/AdminPanel';
// import AddEmployeeDetails from './Components/Admin/AddEmployeeDetails';
import AddEmployee from './AddEmployee';
import Calender from './Components/Calender';
import Adminsidebar from './Components/Adminsidebar';
import Adminheader from './Components/Adminheader';
import Adminpanel from './Components/AdminPanel';
import AddEmployeeDetails from './Components/AddEmployeeDetails';
import Home from './Home';
import Charts from './Components/Charts';


function App() {

  return (
  <Router>
    <Header />
    {/* <Adminsidebar/> */}
  <Routes>
  <Route path="/" element={<Home/>} >
  <Route path="/employee" element={<AddEmployee/>}/>
  <Route path="/calender" element={<Calender/>}/>
  <Route path="/chart" element={<Charts/>}/>
  </Route>
  <Route path="/header" element={<Header/>}/>
  <Route path="" element={<Layout/>}/>
  <Route path='/adminsidebar' element={<Adminsidebar/>}/>
  <Route path='/adminheader'element={<Adminheader/>}/>
  {/* <Route path='/adminpanel' element={<Adminpanel/>}/> */}
 
  <Route path="adminpanel" element={<Adminpanel/>} >
  <Route path="adminpanel/addemployeedetails" element={<AddEmployeeDetails/>}/>
  <Route path="adminpanel/charts" element={<Charts/>}/>
  {/* <Route path="/calender" element={<Calender/>}/> */}
  </Route>
  {/* <Route path='/adminpanel/addemployeedetails'  element={<AddEmployeeDetails/>}/>  */}
</Routes>

</Router>


  );
}

export default App;
