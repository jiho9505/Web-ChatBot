import React from 'react'
import { withRouter,  Link } from 'react-router-dom';
import nav1 from './NavImages/nav1.PNG'
import nav2 from './NavImages/nav2.PNG'
import nav3 from './NavImages/nav3.PNG'

function MobileNav() {
    return (
        <div style={{ display : 'flex' , height : '100px' , justifyContent: 'space-between'}}>
            <Link to="/path"><img src={nav1} style={{maxwidth:'100px',maxHeight:'100px', border: '1px solid #eee',flexBasis: '33%'}}/></Link>
            <Link to="/product"><img src={nav2} style={{maxwidth:'100px',maxHeight:'100px', border: '1px solid #eee', flexBasis: '33%'}}/></Link>
            <Link to="/counsel"><img src={nav3} style={{maxwidth:'100px',maxHeight:'100px', border: '1px solid #eee', flexBasis: '33%'}}/></Link>
        </div>
    )
}

export default withRouter(MobileNav)
