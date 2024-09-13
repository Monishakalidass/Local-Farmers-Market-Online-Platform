import React, { useEffect } from 'react';
import { SidebarDataAdmin } from './SidebarDataAdmin';
import './AdminDashboard.css'; // Import your CSS for styling
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { deletecategorybyid, getAllcategory } from '../pages/Service/Api';

function CategoryDash() {

  const[category,setcategory]=useState([]);
  useEffect(()=>{
    getAllCategory();
  },[])
  async function getAllCategory()
  {
    try{
      await getAllcategory().then((resu)=>
        {
          setcategory(resu.data)
        })
    }
    catch(error)
    {
      console.log("error")
    }
  }
  //DELETECategory
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
      const response = await deletecategorybyid(id);
      console.log(response);
  
      if (response.status === 204) {
        console.log("Deleted");
        getAllCategory();
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
            <Link to='/formcategory'><button className="btn btn-info" type="submit">Add Category</button></Link>
             </div>
              <div id='spacetable'>
              <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Category ID</th>
                                    <th>Category Name</th>
                                    <th>Category Des</th>
                                    <th>Vendor Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    category.map(
                                      (current) => {
                                        return(

                                          <tr key = {current.categoryid}>
                                            <td> {current.categoryid}</td>
                                            <td> {current.categoryname}</td>
                                            <td> {current.categorydesc}</td>
                                             <td> { current.producername} </td>   
                                             
                                             <td>
                                                 {/* <Link to='/formcategory'>
                                                  <button onClick={ () => {}} className="btn btn-info" >Update </button>
                                                  </Link> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => {handledelete(current.categoryid)}} className="btn btn-danger">Delete </button>
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
  )
}

export default CategoryDash