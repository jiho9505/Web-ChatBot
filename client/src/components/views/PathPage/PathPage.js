import React from 'react'
import Mapservice from './mapservice/mapservice'
import { Button } from 'antd';

function PathPage() {
    return (
        <div className='pageSize'>

            <h2 className="pageStart">
                오시는 길
            </h2>
            <div className='grayBorder'/>
            
            <div className="path__map">
                <Mapservice/>
            </div>
            
            <div className="path__desc">
                <Button style={{borderRadius:'8px' , color: '#73aace'}}>오시는 길</Button>
                <h3 style={{color: 'gray'}}>
                    경기도 남양주시 일패동 725-1
                </h3>
            </div>
           
            
            
                
            
        </div>
    )
}

export default PathPage
