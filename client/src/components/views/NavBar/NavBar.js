import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {


  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div>
        
        <Link to="/">
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
