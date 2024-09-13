import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Swal from 'sweetalert2'

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  const history = useHistory();

  const handlelogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('LoggedOut!', 'success');
        history.push('/'); // Navigate to the desired route after confirming logout.
      }
    });
  };
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
            <AccountCircleIcon/>
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  <Link to='/account'>
                    <div className='img'>
                      <AccountCircleIcon className='icon'/>
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>User</h4>
                    
                  </div>
                </div>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                {/* <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button> */}
                <button className='box'>
                  <GrHelp className='icon' />
                 <Link to="/help"><h4>Help</h4></Link> 
                </button>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                 
                  <h4 onClick={handlelogout}> Log Out</h4>

                 
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
