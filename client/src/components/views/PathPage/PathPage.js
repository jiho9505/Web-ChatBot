import React from 'react'
import Mapservice from './mapservice/mapservice'
import { Button , Typography} from 'antd';

const { Title , Text} = Typography;

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
                <Button style={{borderRadius:'8px' , color: '#73aace', fontSize : '16px' , cursor : 'default'}}>경기도 남양주시 일패동 725-1</Button>
               
            </div>
           
            
            
                
            
        </div>
    )
}

export default PathPage
