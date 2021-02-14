import React from 'react';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css';
import { Link } from 'react-router-dom';
import font from './font.PNG';

function NavBar() {
  const upScroll = () => {
    window.scrollTo( 0, 0 );
  }


  return (
    <nav className="menu" >
      <div>
        
        <Link onClick={upScroll} to="/" style={{ display:'flex' , padding : '15px 5px'}}>
        
          <img src='./favicon32.png'/>
          <img src={font} style={{ marginLeft : '5px'}}/>
        
          
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
