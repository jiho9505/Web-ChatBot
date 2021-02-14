import React from 'react'
import { withRouter,  Link } from 'react-router-dom';
import nav1 from './NavImages/nav1.PNG'
import nav2 from './NavImages/nav2.PNG'
import nav3 from './NavImages/nav3.PNG'
import nav4 from './NavImages/nav4.PNG'

function MobileNav() {

    const upScroll = () => {
        window.scrollTo( 0, 0 );
    }
    
    return (
        <div className="mobnav__whole" >
            <div className="mobnav__part">
                <Link onClick={upScroll} to="/"><img src={nav4} className="mobnav__img"/></Link>
            </div>
            <div className="mobnav__part">
                <Link onClick={upScroll} to="/path"><img src={nav1} className="mobnav__img"/></Link>
            </div>
            <div className="mobnav__part">
                <Link onClick={upScroll} to="/product"><img src={nav2} className="mobnav__img"/></Link>
            </div>
            <div className="mobnav__part">
                <Link onClick={upScroll} to="/counsel"><img src={nav3} className="mobnav__img"/></Link>
            </div>  
        </div>
    )
}

export default withRouter(MobileNav)
