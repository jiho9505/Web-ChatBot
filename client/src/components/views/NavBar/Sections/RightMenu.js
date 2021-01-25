import React from 'react';
import { Menu } from 'antd';
import { withRouter,  Link } from 'react-router-dom';


function RightMenu(props) {

    return (
      <Menu mode={props.mode}>
        <Menu.Item key="hello">
          <Link to="/login">인사말</Link>
        
        </Menu.Item>
        <Menu.Item key="come">
          <Link to="/path">오시는 길</Link>
        
        </Menu.Item>
        <Menu.Item key="prod">
          <Link to="/register">제품 샘플</Link>
        
        </Menu.Item>
        <Menu.Item key="counsel">
          <Link to="/login">상담 요청</Link>
        
        </Menu.Item>

      </Menu>
    )
  }


export default withRouter(RightMenu);

