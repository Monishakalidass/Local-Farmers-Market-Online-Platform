import React from "react"
import Dashboard from './AdminDashboard/AdminDashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home" 
import { useSelector } from "react-redux"
import LoginSignup from "./components/LoginSignup/LoginSignup"

import './components/home.css'
import Payment from "./components/Payment/Payment";
import HelpPage from "./components/Help/Help.jsx";
import MyFormvendor from "./AdminDashboard/formvendor";
import MyFormProduct from "./AdminDashboard/formproduct";
import VendorAdminDash from "./AdminDashboard/VendorDash";
import ProductAdminDash from "./AdminDashboard/ProductDash";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import VendorDashBoard from "./VendorDashboard/VendorDashboard";
import Vendor2 from "./VendorDashboard/Managevendor";
import ManageProduct from "./VendorDashboard/ManageProduct";
import MyFormCategory from "./AdminDashboard/formcategory";
import CategoryDash from "./AdminDashboard/CategoryDash";
import VendorCategoryDash from "./VendorDashboard/ManageCategory";
import MyFormVENDORCategory from "./VendorDashboard/formVENDORcategoty";
import MyFormVENDORProduct from "./VendorDashboard/formVENDORproduct";
import Deliver from "./AdminDashboard/Delivery";
import VendorSupportCard from "./VendorDashboard/Vendorsupport";
import MyFormAdminUpdate from "./AdminDashboard/formupdateproduct";
import HelpAdminDash from "./AdminDashboard/HelpDash";
import UserAdminDash from "./AdminDashboard/UserDash";
import About from "./components/About/About.js";

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
       
        <Router>
          <Switch>
          <Route exact path='/' component={LoginSignup} />
          <Route exact path='/admindashboard' component={AdminDashboard} />
          <Route exact path='/Vendoradmindash' component={VendorAdminDash} />
          <Route exact path='/Vendorcategorydash' component={VendorCategoryDash} />
          <Route exact path='/VendordashVendor' component={Vendor2} />
          <Route exact path='/Productadmindash' component={ProductAdminDash} />
          <Route exact path='/vendordashProduct' component={ManageProduct} />
          <Route exact path='/formcategory' component={MyFormCategory} />
          <Route exact path='/formupdateproduct' component={MyFormAdminUpdate} />
          <Route path="/vendor-support" component={VendorSupportCard} />
          <Route exact path='/formVENDORcategory' component={MyFormVENDORCategory} />
          <Route exact path='/formVENDORproduct' component={MyFormVENDORProduct} />
          <Route exact path='/formvendor' component={MyFormvendor} />
          <Route exact path='/vendordash' component={VendorDashBoard} />
          <Route exact path='/formproduct' component={MyFormProduct} />
          <Route exact path='/categoryadmindash' component={CategoryDash} />
          <Route exact path='/help' component={HelpPage} />
          <Route exact path='/helpdashadmin' component={HelpAdminDash} />
          <Route exact path='/userdashadmin' component={ UserAdminDash} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/details' component={About} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/pay' component={Payment} />
          <Route exact path='/delivery' component={Deliver} />

          </Switch>
        
        </Router>
   
    </>
  )
  
}
export default App


// import React from 'react';// Import your Dashboard component

// import HomeDashboard from './AdminDashboard/HomeDash';
// import AdminReport from './AdminDashboard/Report';




// function App() {
//   return (
//     <div className="App">
//       {/* Add any other components or content here */}
//       <HomeDashboard/>


//     </div>
//   );
// }

// export default App;
