import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import './footer.css';


export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className="footerhome">

        <div className='container flex'>
          
        
        
        <p>Local Farmer's Market Online platform - All right reserved </p>

          <div className='social'>
    
          <a href={"https://accountscenter.instagram.com/"} target="_blank" rel="noopener noreferrer">
         <BsFacebook className='icon' />
         </a>
         <a href={"https://www.facebook.com/login.php"} target="_blank" rel="noopener noreferrer">
         <RiInstagramFill className='icon' />
         </a>
         <a href={"https://twitter.com/i/flow/login"} target="_blank" rel="noopener noreferrer">
         <AiFillTwitterCircle className='icon' />
         </a>
         <a href={"https://in.linkedin.com/"} target="_blank" rel="noopener noreferrer">
         <AiFillLinkedin className='icon' />
         </a>
        </div>
          </div>
          </div>
      </footer>
    </>
  )
}
