import React, { useEffect } from 'react';
import { SidebarDataAdmin } from './SidebarDataAdmin';
import './AdminDashboard.css'; 
import { BiLogOutCircle } from 'react-icons/bi';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';


function AdminDashboard() {
  const userDetails = 100; 
  const productDetails = 7;  
  const vendorDetails = 7; 
  const categoryDetails = 10;
  const helpDetails = 10;
  const history = useHistory();

  const handlelogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('LoggedOut!', 'success');
        history.push('/'); // Navigate to the desired route after confirming logout.
      }
    });
  };

  
  return (
    <>
    <div id='overview'>
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
           <li className="nav-item" style={{ marginTop: '360px' }}>
            <a href="#" className="nav-link">
              <BiLogOutCircle size={30} />
              <span className="nav-text" onClick={handlelogout}>Log Out</span>
            </a>
          </li>
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

      <div id='spacetable'>
      <div className="containerdash">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <div className='black-card carddash'>
            <h5 className="carddash-title">Number of Products</h5>
            <p className="carddash-text">{productDetails }</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className='black-card carddash'>
            <h5 className="carddash-title">Number of Vendors</h5>
            <p className="carddash-text">{vendorDetails}</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className='black-card carddash'>
            <h5 className="carddash-title">Number of Category</h5>
            <p className="carddash-text">{categoryDetails}</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className='black-card carddash'>
            <h5 className="carddash-title">Number of Users</h5>
            <p className="carddash-text">{userDetails}</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className='black-card carddash'>
            <h5 className="carddash-title">Number of Help</h5>
            <p className="carddash-text">{helpDetails}</p>
          </div>
        </div>
          
        </div>
      </div>
    </div>
      </div>
      </div>
     
    </>
  );
}

export default AdminDashboard;


