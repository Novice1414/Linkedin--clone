import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

 

function Header() {

  const dispatch = useDispatch();
  

  const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
  };
  
  return (
    <div className='header'>
    
      <div className="header__left">
      <img src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder='search'/>
            </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption 
        avatar={true}
        title='Me'
        onClick={logoutOfApp }
        />
       </div>
    </div>
  )
}

export default Header
