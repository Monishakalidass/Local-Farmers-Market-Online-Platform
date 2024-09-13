import React, { useEffect } from 'react';
import { SidebarData, SidebarDataAdmin } from './SidebarDataAdmin';
import './AdminDashboard.css'; // Import your CSS for styling
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2'
import { deleteproductbyid, getAllProduct, updateproductbyid } from '../pages/Service/Api';

function ProductAdminDash() {
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
   
      const response = await deleteproductbyid(id);
      console.log(response);
  
      if (response.status === 204) {
        console.log("Deleted");
        getAllproduct();
      } else {
        console.log("error");
      }
    }
  }

  const[details,setDetails]=useState([]);
  
  useEffect(()=>{
    getAllproduct();
  },[])
  async function getAllproduct()
  {
    try{
        await getAllProduct().then((res)=>
        {
          setDetails(res.data)
        })
    }
    catch(error){
      console.log("error");
    }
  }
 
  const [ID, setID] = useState(0);

let handleEdit=(id)=>{
  localStorage.setItem("prodID",id);
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
             
              <li className="nav-item dropdown">
                
            
              </li>
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

      <Link to='/formproduct'><button className="btn btn-info" type="submit">Add Product</button></Link>
      </div>
      <div id='spacetable'>

      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Price</th>
                                    <th>Product Name</th>
                                    <th>Product Category</th>
                                    <th>Availability Status</th>
                                    <th>catee</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map(
                                      (current) => {
                                        return(

                                          <tr key = {current.productid}>
                                            <td> {current.productid}</td>
                                            <td> {current.price}</td>
                                             <td> { current.name} </td>   
                                             <td> {current.category}</td>
                                             <td> {current.availabilitystatus}</td>
                                             <td> {current.catee.categoryid}</td>
                                        
                                             <td>
                                                 <Link to='/formupdateproduct'>
                                                  <button onClick={ () => {handleEdit(current.productid)}} className="btn btn-info" >Update </button>
                                                  </Link>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => {handledelete(current.productid)}} className="btn btn-danger">Delete </button>
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

export default ProductAdminDash;