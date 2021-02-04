import React from 'react'
import { Carousel } from 'antd';
import a from './Images/1.jpg'
import b from './Images/2.jpg'

function ImageSlider() {
    return (
        <div style={{ margin: 'auto',maxWidth: '400px', maxHeight: '400px' }}>

            <Carousel autoplay>
                
                    <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
                        <img style={{ maxWidth: '100%', maxHeight: '400px' }}
                            src={a} alt="a" />
                    </div>
                    <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
                        <img style={{ maxWidth: '100%', maxHeight: '400px' }}
                            src={b} alt="b" />
                    </div>
                
            </Carousel>
        </div>
    )
}

export default ImageSlider