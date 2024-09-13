import React from 'react';
import './form.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { HEADER } from '../pages/Service/Api';


// Define a custom CSS class for the black card
const backCardStyle = {
//    width:'40%', 
  background: 'lightgrey',
  color: 'Black', // Text color is set to white for better visibility
};

function MyFormProduct() {
  let history=useHistory();
  const[proid,setProductId]=useState(0);
    const[proprice,setProductPrice]=useState(0);
    const[proname,setProductName]=useState('');
    const[procategory,setProductCategory]=useState('');
    const[proAvailability,setAvailability]=useState('');
    const[categoryid,setCategoryId]=useState(0);
   
  // const handlevendordetails=async(e)=>{
    
  // }
  const handlesaveupdate =async (e) => {
    e.preventDefault();
    try{
    
      console.log({
        productid: proid,
        price: proprice,
        name: proname,
        category:procategory,
        availabilitystatus: proAvailability,
        catee:
            {
           categoryid:categoryid,
            }
      });

      const response=await axios.post('http://localhost:8080/product/postnewproduct',{
        productid: proid,
        price: proprice,
        name: proname,
        category:procategory,
        availabilitystatus: proAvailability,
        catee: 
            {
              categoryid:categoryid,
            }
      },{headers:HEADER});

      if(response.status===200)
      {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
         console.log("IN")
          history.push('/Productadmindash')
      }
   }
   catch(error)
   {
    console.log("error");
   }
    
  };
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card w-25" style={backCardStyle}>
        <div className="card-body">
          <div className="container">
            <h2 className="text-center">Product Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="vendorId" className="form-label">Product Id</label>
                <input onChange={(e)=>{setProductId(e.target.value)}} type="text" className="form-control" id="vendorId" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmName" className="form-label">Product Price</label>
                <input onChange={(e)=>{setProductPrice(e.target.value)}}  type="text" className="form-control" id="farmName" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmDesc" className="form-label">Product Name</label>
                <input onChange={(e)=>{setProductName(e.target.value)}} type="text" className="form-control" id="farmDesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Category</label>
                <input onChange={(e)=>{setProductCategory(e.target.value)}} type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Availability Status</label>
                <input onChange={(e)=>{setAvailability(e.target.value)}} type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Category Id</label>
                <input onChange={(e)=>{setCategoryId(e.target.value)}} type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handlesaveupdate }>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFormProduct;
