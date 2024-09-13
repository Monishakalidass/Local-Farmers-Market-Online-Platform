import React, { useEffect } from 'react';
import './form.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { HEADER, getProductById } from '../pages/Service/Api';

const backCardStyle = {

  background: 'lightgrey',
  color: 'Black'
};

function MyFormAdminUpdate() {
  let history=useHistory();
    const[proprice,setProductPrice]=useState(0);
    const[proname,setProductName]=useState('');
    const[procategory,setProductCategory]=useState('');
    const[proAvailability,setAvailability]=useState('');
   
    const [fields, setFields] = useState([]);
    useEffect(()=>{
      fetchproductbyid();
    },[])
    async function fetchproductbyid() {
        try{
            console.log("IN");
            await getProductById(localStorage.getItem("prodID")).then((res)=>{
                setFields(...fields,res.data);
            })
          }
          catch(error){
            console.log('error');
          }
      }
    console.log(fields);
    const handlesaveupdate =async (e) => {
    e.preventDefault();
    try{
      console.log({
       
        price: proprice,
        name: proname,
        category:procategory,
        availabilitystatus: proAvailability
        
      });
      const response=await axios.put(`http://localhost:8080/product/changeproduct/${fields.productid}`,{
        price: proprice,
        name: proname,
        category:procategory,
        availabilitystatus: proAvailability
       
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
        //  localStorage.removeItem("prodID");
          history.push('/Productadmindash');
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
                <label htmlFor="farmName" className="form-label">Product Price</label>
                <input onChange={(e)=>{setProductPrice(e.target.value)}} defaultValue={fields.price} type="text" className="form-control" id="farmName" />
              </div>
              <div className="mb-3">
                <label htmlFor="farmDesc" className="form-label">Product Name</label>
                <input onChange={(e)=>{setProductName(e.target.value)}} defaultValue={fields.name} type="text" className="form-control" id="farmDesc" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Category</label>
                <input onChange={(e)=>{setProductCategory(e.target.value)}} defaultValue={fields.category} type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3">
                <label htmlFor="vendorNum" className="form-label">Availability Status</label>
                <input onChange={(e)=>{setAvailability(e.target.value)}} defaultValue={fields.availabilitystatus}type="text" className="form-control" id="vendorNum" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handlesaveupdate}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFormAdminUpdate;
