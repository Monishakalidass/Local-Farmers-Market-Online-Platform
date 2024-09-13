import React from 'react';
import './form.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { HEADER } from '../pages/Service/Api';


const backCardStyle = {
//    width:'40%', 
  background: 'lightgrey',
  color: 'Black', // Text color is set to white for better visibility
};

function MyFormCategory() {
  let history=useHistory();
  const[catid,setCategoryId]=useState(0);
    const[catname,setCategoryName]=useState('');
    const[catdesc,setCategoryDesc]=useState('');
    const[catproducer,setProducerName]=useState('');
   
  // const handlevendordetails=async(e)=>{
    
  // }
  const handlesaveupdate =async (e) => {
    e.preventDefault();
    try{
    
      console.log({
        categoryid: catid,
        categoryname: catname,
        categorydesc: catdesc,
        producername:catproducer
      });

      const response=await axios.post('http://localhost:8080/category/postnewcategory',{
        categoryid: catid,
        categoryname: catname,
        categorydesc: catdesc,
        producername:catproducer
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
          history.push('/categoryadmindash')
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
            <h2 className="text-center">Category Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="vendorId" className="form-label">Category Id</label>
                <input onChange={(e)=>{setCategoryId(e.target.value)}} type="text" className="form-control" id="vendorId" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmName" className="form-label">Category Name</label>
                <input onChange={(e)=>{setCategoryName(e.target.value)}}  type="text" className="form-control" id="farmName" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmDesc" className="form-label">Category Desc</label>
                <input onChange={(e)=>{setCategoryDesc(e.target.value)}} type="text" className="form-control" id="farmDesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Producer Name</label>
                <input onChange={(e)=>{setProducerName(e.target.value)}} type="text" className="form-control" id="vendorNum" />
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

export default MyFormCategory;
