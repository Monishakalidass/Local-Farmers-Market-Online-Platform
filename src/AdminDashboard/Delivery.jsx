import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Delivery.css'; // Import your unique CSS file

function Deliver() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handledelivery = () => {
    // Check if any of the required fields are empty
    if (
      formData.email === '' ||
      formData.address === '' ||
      formData.city === '' ||
      formData.state === '' ||
      formData.zip === ''
    ) {
      // If any required field is empty, show an alert
      Swal.fire({
        title: 'Please Fill All Details',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } else {
      // If all required fields are filled, create the success message and navigate to '/pay'
      const message = `
        Email: ${formData.email}
        Address: ${formData.address}
        Address 2: ${formData.address2}
        City: ${formData.city}
        State: ${formData.state}
        Zip: ${formData.zip}
      `;

      Swal.fire({
        title: 'Delivery Information',
        html: message,
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        history.push('/pay');
      });
    }
  };

  return (
    <div className="page-container">
      <div id="delivery" className="delivery-container">
        <div className="delivery-form">
          <form className="delivery-form-content">
            <h2 className="delivery-form-title">Delivery Information</h2>
            <div className="delivery-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email Id"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="delivery-form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="1234 Main St"
              />
            </div>
            <div className="delivery-form-group">
              <label htmlFor="address2">Address 2</label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="delivery-form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="delivery-form-group">
              <label htmlFor="state">State</label>
              <select
  id="state"
  name="state"
  value={formData.state}
  onChange={handleChange}
>
  <option value="">Choose...</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  <option value="Ladakh">Ladakh</option>
  <option value="Lakshadweep">Lakshadweep</option>
</select>

            </div>
            <div className="delivery-form-group">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="Enter your pincode"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
            <div className="delivery-form-group">
              <button
                type="button"
                className="delivery-btn"
                onClick={handledelivery}
              >
                Confirm Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Deliver;
