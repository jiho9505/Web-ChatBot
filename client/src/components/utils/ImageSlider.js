import React from 'react'
import { Carousel } from 'antd';
import a from './Images/1.jpg'
import b from './Images/2.jpg'
import c from './Images/3.jpg'

function ImageSlider() {
    return (
        <div style={{ margin: 'auto', width: '100%', height: '100%' }}>
           
            <Carousel autoplay>
            
                    <div>
                   
                        <img className="Imgslider__img"
                            src='https://dsjumul.s3.ap-northeast-2.amazonaws.com/1.jpg' alt="a" />
                    </div>
                    <div>
                    
                        <img className="Imgslider__img"
                            src='https://dsjumul.s3.ap-northeast-2.amazonaws.com/2.jpg' alt="b" />
                    </div>
                    <div >
                   
                        <img className="Imgslider__img"
                            src='https://dsjumul.s3.ap-northeast-2.amazonaws.com/3.jpg' alt="c" />
                    </div>
                
            </Carousel> 
        </div>
    )
}

export default ImageSlider