import React, { useEffect } from 'react';
import { SidebarDataAdmin } from './SidebarDataAdmin';
import './AdminDashboard.css'; // Import your CSS for styling
import { useState } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { deletevendorbyid, getAllvendor } from '../pages/Service/Api';

function VendorAdminDash() {
  //GET
  const[details,setDetails]=useState([]);
  useEffect(()=>{
    getAllVendor();
  },[])
  async function getAllVendor()
  {
    try{
        await getAllvendor().then((res)=>
        {
          setDetails(res.data)
        })
    }
    catch(error){
      console.log("error");
    }
  }
  console.log(details);
  //DELETE 
  async function handledelete(id) {
    console.log(id);
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  
    if (result.isConfirmed) {
      // User clicked the "Yes, delete it!" button
      const response = await deletevendorbyid(id);
      console.log(response);
  
      if (response.status === 204) {
        console.log("Deleted");
        getAllVendor();
      } else {
        console.log("error");
      }
    }
  }
  
  return (
    <>
      <nav className="sidebardash">
        <ul className="nav-menu">
          {SidebarDataAdmin.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.path} className="nav-link">
                {item.icon}
                <span className="nav-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div id='navbarcard'>

   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <div id='searchbtn'>
              <button className="btn btn-outline-success" type="submit">Search</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <div id='addbutton'>
      <Link to='/formvendor'><button className="btn btn-info" type="submit">Add Users</button></Link>
      </div>
      
      <div id='spacetable'>

      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Vendor ID</th>
                                    <th>Farm Name</th>
                                    <th>Farm Desc</th>
                                    <th>Vendor Num</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map(
                                      (current) => {
                                        return(

                                        <tr key = {current.vendor_id}>
                                            <td> {current.vendor_id}</td>
                                             <td> { current.farmname} </td>   
                                             <td> {current.farmdesc}</td>
                                             <td> {current.vendornum}</td>
                                             {/* <td> {current.prod.price}</td>  */}
                                             <td>
                                                <Link to='/formvendor'>
                                                  {/* <button onClick={ () => {}} className="btn btn-info">Update </button> */}
                                                  </Link> 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => {handledelete(current.vendor_id)}} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                        )
                                      }
                                    )
                                }
                            </tbody>

                            
                        </table>
                 </div>
      </div>
      </div>
    </>
  );
}

export default VendorAdminDash;
