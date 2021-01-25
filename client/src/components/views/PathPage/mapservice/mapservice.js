import React from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import './mapservice.css'

function PathPage() {
    const NAVER_API_KEY = 'orqem1p79t';
    

    return (
    <div className='map__border'>
      <RenderAfterNavermapsLoaded
        ncpClientId={NAVER_API_KEY} 
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}

      >
        <NaverMap
          id='maps-getting-started-controlled'
          
          defaultCenter={{ lat: 37.617054, lng: 127.177252}} // 지도 초기 위치
         
          zoom={17} 
          
        >
        <Marker
                icon = {{
                    content: '<div class="pulse"/>' ,
                    anchor: {x:12, y:12}
                }}
                
                position={{ lat: 37.617054, lng: 127.177252}}
                animation={2}
                />
    
        
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </div> 
    )
            }


export default PathPage
