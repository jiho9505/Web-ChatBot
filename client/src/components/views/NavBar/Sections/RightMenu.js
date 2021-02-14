import React from 'react';
import { Menu } from 'antd';
import { withRouter,  Link } from 'react-router-dom';


function RightMenu(props) {
    const upScroll = () => {
      window.scrollTo( 0, 0 );
    }

    return (
      <Menu mode={props.mode}>
        <Menu.Item key="come">
          <Link onClick={upScroll} to="/path">오시는 길</Link>
        
        </Menu.Item>
        <Menu.Item key="prod">
          <Link onClick={upScroll} to="/product">제품 샘플</Link>
        
        </Menu.Item>
        <Menu.Item key="counsel">
          <Link onClick={upScroll} to="/counsel">견적 요청</Link>
        
        </Menu.Item>

      </Menu>
    )
  }


export default withRouter(RightMenu);

