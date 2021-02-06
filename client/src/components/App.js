import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";
import PathPage from "./views/PathPage/PathPage"
import ProductPage from "./views/ProductPage/ProductPage"
import NavBar from "./views/NavBar/NavBar";
import Counsel from "./views/Counsel/Counsel"
import MobileNav from "./views/MobileNav/MobileNav"
import Footer from "./views/Footer/Footer"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function App() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


  return (
 
    <Suspense fallback={(<div style={{display:'flex', marginTop:'200px', justifyContent:'center', alignItems: 'center'}}>
      <Spin indicator={antIcon} /></div>)}>
      
      <NavBar/>
      
     
      <br/>
      
      <div style={{ minHeight: 'calc(100vh - 80px)'}}>
        
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/path" component={PathPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/counsel" component={Counsel} />
          
        </Switch>
        
      </div>
      <div className='space'></div>
      <div className="quick">
        <MobileNav />
      </div>
      
      <Footer />
     
      <div className='spacing'/>

    </Suspense>
  
  );
}

export default App;
