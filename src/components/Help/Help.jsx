  import React, { useState } from 'react';
  import './Help.css'
  import Swal from 'sweetalert2'
  import { useHistory } from 'react-router-dom';

  import axios from 'axios';
  import { HEADER } from '../../pages/Service/Api';

  const HelpPage = () => {
    let history=useHistory();
    const [id, setId] = useState(0);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage]=useState('');
    
    const handlesaveupdate =async (e) => {
      e.preventDefault();
      try{
      
        console.log({
          helpid: id,
          name: name,
          email: email,
          message:message
        
        });

        const response=await axios.post('http://localhost:8080/micro/postnewhelp',{
          helpid: id,
          name: name,
          email: email,
          message:message
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
          //  console.log("IN")
            history.push('/home')
        }
    }
    catch(error)
    {
      console.log("error");
    }
      
    };
    return (
      <div className='backgroundhelp'>

      <div className="support-page">
        <h2 className="page-title">Contact Customer Support</h2>
        <p>If you have any questions or need assistance, please don't hesitate to contact our customer support team. We are here to help you.</p>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: moni@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className="contact-form">
          <h3>Contact Us</h3>
          <form>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name"  onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            </div>
            <button className="submit-button" type="submit" onClick={handlesaveupdate}>Submit</button>
          </form>
        </div>
      </div>
      </div>
    );
  };

  export default HelpPage;
