import React from 'react'
import { Carousel } from 'antd';
import a from './Images/1.jpg'
import b from './Images/2.jpg'

function ImageSlider() {
    return (
        <div>

            <Carousel autoplay>
                
                    <div>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={a} alt="a" />
                    </div>
                    <div>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={b} alt="b" />
                    </div>
                
            </Carousel>
        </div>
    )
}

export default ImageSlider