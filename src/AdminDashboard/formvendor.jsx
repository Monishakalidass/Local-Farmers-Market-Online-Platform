import React, { useState } from 'react';
import './form.css';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { HEADER } from '../pages/Service/Api';
// import { HEADER } from '../Service/Api';

// Define a custom CSS class for the black card
const blackCardStyle = {
  background: 'lightgrey',
  color: 'Black', // Text color is set to white for better visibility
};

function MyFormvendor() {
  let history=useHistory();
  const [id, setId] = useState(0);
    const [farmname, setFarmname] = useState('');
    const [farmDesc, setFarmDesc] = useState('');
    const [num, setNum] = useState('');
    const[proid,setProductId]=useState(0);
    
  const handlesaveupdate =async (e) => {
    e.preventDefault();
    try{
    
      console.log({
        vendor_id: parseInt(id),
        farmname: farmname,
        farmdesc: farmDesc,
        vendornum:num,
        prod: [
            {
           productid: parseInt(proid),
            }
  
        ]
      });

      const response=await axios.post('http://localhost:8080/vendor/postvendor',{
        vendor_id: id,
        farmname: farmname,
        farmdesc: farmDesc,
        vendornum:num,
        prod: [
            {
           productid :proid,
            }
  
        ]
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
          history.push('/Vendoradmindash')
      }
   }
   catch(error)
   {
    console.log("error");
   }
    
  };
  return (
    <div id='wholeform' className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card w-25" style={blackCardStyle}>
        <div className="card-body">
          <div className="container">
            <h2 className="text-center">Vendor Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="vendorId" className="form-label">Vendor Id</label>
                <input onChange={(e)=>{setId(e.target.value)}} type="text" className="form-control" id="vendorId" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmName" className="form-label">Farm Name</label>
                <input  onChange={(e)=>{setFarmname(e.target.value)}} type="text" className="form-control" id="farmName" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmDesc" className="form-label">Farm Desc</label>
                <input onChange={(e)=>{setFarmDesc(e.target.value)}} type="text" className="form-control" id="farmDesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Vendor Num</label>
                <input onChange={(e)=>{setNum(e.target.value)}} type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Product Id</label>
                <input onChange={(e)=>{setProductId(e.target.value)}} type="text" className="form-control" id="vendorNum" />
              </div>
              <button type="button" className="btn btn-primary" onClick={handlesaveupdate}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFormvendor;
