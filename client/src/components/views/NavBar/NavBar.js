import React from 'react';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {


  return (
    <nav className="menu" style={{ display: 'flex', justifyContent: 'space-between',position: 'fixed', zIndex: 5, width: '100%' }}>
      <div>
        
        <Link to="/" style={{ display:'flex' }}>
          <img src='./favicon32.png'/>
          <h3>대성주물</h3>
        </Link>
        
      </div>
      <div className="menu__container">
        
        <div className="menu_rigth" >
          <RightMenu mode="horizontal" />
        </div>

      </div>
    </nav>
  )
}

export default NavBar
