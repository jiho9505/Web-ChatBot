import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import PathPage from "./views/PathPage/PathPage"
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage.js'));
const NotFound = React.lazy(() => import('./views/NotFound/NotFound'));



function App() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  /*
    <Route exact path="/login" component={Auth(LoginPage, false)} />
    <Route exact path="/:notfound" component={Auth(NotFound, null)} />

  */
  return (
 
    <Suspense fallback={(<div style={{display:'flex', marginTop:'200px', justifyContent:'center', alignItems: 'center'}}>
      <Spin indicator={antIcon} /></div>)}>
      
      <NavBar/>
      
      <br/><br/><br/><br/>
      
      <div style={{ minHeight: 'calc(100vh - 80px)'}}>
        
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/path" component={PathPage} />
        </Switch>
        
      </div>
      <div className='space'></div>
      
      <Footer />
    </Suspense>
  
  );
}

export default App;
