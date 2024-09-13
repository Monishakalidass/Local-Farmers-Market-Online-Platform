import React, { useEffect } from 'react';
import { SidebarData, SidebarDataAdmin } from './SidebarDataAdmin';
import './AdminDashboard.css'; // Import your CSS for styling
import { useState } from 'react';
import { getAllHelp } from '../pages/Service/Api';


function UserAdminDash() {

  const[details,setDetails]=useState([]);
  
  useEffect(()=>{
    getAllhelp();
  },[])
  async function getAllhelp()
  {
    try{
        await getAllHelp().then((res)=>
        {
          setDetails(res.data)
        })
    }
    catch(error){
      console.log("error");
    }
  }
//   const [fields, setFields] = useState([]);
//   const [ID, setID] = useState(0);
//    async function fetchproductbyid(id) {

//         try{
//             console.log("IN");
//             setID(id);
//             await updateproductbyid(id).then((res)=>{
//                 setFields(res.data);
//             })

//             console.log(fields);
//         }
//         catch(error){
//             console.log('error');
//         }
//     }

 
  
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
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
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
     
      <div id='spacetable'>

      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Help Name</th>
                                    <th>Help Email</th>
                                    <th>Help Message</th>
                                </tr>
                            </thead>
                            
                           
                            
                        </table>
                    </div>
              </div> 
             
                 </div>
    </>
  );
}

export default UserAdminDash;