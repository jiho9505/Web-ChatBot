import React from 'react'
import ImageSlider from '../../utils/ImageSlider';

function LandingPage() {
    
    
    return (
        <div className='pageSize'>
            <h2 className="pageStart">
                대성주물
            </h2>
            <div className='grayBorder'/>
            <br/>
            <div style={{ width: '100%',height: '100%'}}>
                <ImageSlider/>
            </div>
            
            
        </div>
    )
}

export default LandingPage
