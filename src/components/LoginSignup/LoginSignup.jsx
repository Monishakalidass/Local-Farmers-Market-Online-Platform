import React, { useState } from 'react'
import './LoginSignup.css'
import axios from 'axios';
import user_icon from '../Img/person.png'
import password_icon from '../Img/password.png'
import email_icon from '../Img/email.png'
import { useHistory } from 'react-router-dom'

const LoginSignup = () => {


    const [action,setAction]= useState("Login");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
  
    const handleEmailChange = (e) => {
      setemail(e.target.value);
  };
  
    const handleNameChange = (e) => {
      setname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
  
let history=useHistory();
  const handleSignup=async(e)=>
  {
    try{
      const response=await axios.post('http://localhost:8080/api/v1/auth/register',{
        name:name,
        email:email,
        password:password,
        role:"CUSTOMER"

      });
      if(response.status===200)
      {
        history.push("/home")
      }

    }
    catch(error){
      console.log("error");
    }

  }
  const handleLogin=async(e)=>
  {
    try{
      const response=await axios.post('http://localhost:8080/api/v1/auth/login',{
        email:email,
        password:password

      });
      if(response.status===200)
      {
        
        localStorage.setItem('id',response.data.uid)
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('Role',response.data.role)
        let role=response.data.role;
        if(role==="ADMIN")
        {
          history.push("/admindashboard") 
        }
        else if(role==="VENDOR")
        {
          history.push("/vendordash")
        }
        else{
          history.push("/home") 
        }

        
      }

    }
    catch(error){
      console.log("error");
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { email, password }
    }
  
    const details = {name, email, password }

  return (
    <form  className="wholesignup" onSubmit={handleSubmit}>

    <div className='fullsignup'>
        <div className="headsignup">
        <div className="textsignup">{action}</div>
        <div className="underlinesignup"></div>
        </div>
      <div className="inputsignup">
        {action==="Login"?<div></div>:<div className="inputlogin">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" required="true" onChange={handleNameChange}/>
        </div>}
        
        <div className="inputlogin">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" required="true" onChange={handleEmailChange}/>
        </div>
        <div className="inputlogin">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" required="true" onChange={handlePasswordChange}/>
        </div>
        
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-passwordlogin">Lost Password? <span>Click Here!</span></div>}
      <div className="submit-containerlogin">
        <div className={action==="Login"?"submitlogin gray":"submitlogin"}onClick={()=>{setAction("Sign Up"); handleSignup();}}> Sign Up
        
            </div>
        <div className={action==="Sign Up"?" submitlogin gray":"submitlogin"}onClick={() => {
  setAction("Login");
  handleLogin();
}}>Login</div>

      </div>
    </div>
  </form>
  )
}

export default LoginSignup;
