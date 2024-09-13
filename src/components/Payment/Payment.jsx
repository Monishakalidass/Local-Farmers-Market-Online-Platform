// import React, { useState } from 'react'
// import "./Payment.css"

// function Payment() {
//   const [amount,setamount]=useState('');
//   const handlePayment=(e)=>
//   {
//    e.preventDefault();
//    if(amount === "")
//    {
//     alert("Please Enter Payment");
//    }
//    else{
//      var options={
//       key:"rzp_test_pGN8sqkifhNycL",
//       key_secret:"SGsgA63WqPze34OXn2FtUs7T",
//       amount:amount *100,
//       currency:"INR",
//       name:"Local Framers",
//       description:"for testing purpose ",
//       handler:function(response){
//         alert(response.razorpay_payment_id)
//       },
//       prefill:{
//         name:"Monisha",
//         email:"moni@gmail.com",
//         contact:"987654321"
//       },
//       notes:{
//         address:"Razorpay Corporate office"
//       },
//       theme:{
//         color:"pink"
//       }
//      };
//      var pay=new window.Razorpay(options);
//      pay.open();
//    }
//   }
//   return (
//     <div>
//         <div className="card">
//       <h1>Centered Card</h1>
//       <div className="form-container">
//         <input type="text" placeholder="Enter something" vaule={amount}onChange={(e)=>setamount(e.target.value)} />
//         <button onClick={handlePayment}>Submit</button>
//       </div>
//     </div>
      
//       </div>
//   )
// }

// export default Payment

import React, { useState } from 'react';
import './Payment.css';

import { useSelector } from "react-redux"

function Payment() {

  const quantity = useSelector((state) => state.cart.totalQuantity)
  const cartItems = useSelector((state) => state.cart.itemsList)

  let total = 0
  const itemsLists = useSelector((state) => state.cart.itemsList)
  itemsLists.forEach((item) => {
    total += item.totalPrice
  })
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // if (amount == '') {
    //   console.log(amount);
    //   alert('Please Enter Payment');
    // } 
    // else {
      // Your payment logic here
      var options={
        key:"rzp_test_pGN8sqkifhNycL",
        key_secret:"SGsgA63WqPze34OXn2FtUs7T",
        amount:80 *100,
        currency:"INR",
        name:"Local Framers",
        description:"for testing purpose ",
        handler:function(response){
          alert(response.razorpay_payment_id)
        },
        prefill:{
          name:"Monisha",
          email:"moni@gmail.com",
          contact:"987654321"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme:{
          color:"pink"
        }
       };
       var pay=new window.Razorpay(options);
       pay.open();
    //  }
    }

 
  return (
    <div className='wholepaycolor'>

    <div className="custom-card-container">
      <div className="custom-card">
        <h1>Make your Payment</h1>
        <div className="form-container">
          <input
            type="text"
            placeholder="Enter amount"
            value={total}
            onChange={(e) => setAmount(e.target.value)}
            className="custom-input"
            />
          <button onClick={handlePayment} className="custom-button">Pay</button>
        </div>
      </div>
    </div>
            </div>
  );
}

export default Payment;
