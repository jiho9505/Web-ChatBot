import React from 'react'
import ImageSlider from '../../utils/ImageSlider';
import HomeImage from "./HomeImage/logo.PNG"
import Arrow from "./HomeImage/arrow.PNG"

function LandingPage() {
    
    
    return (
        <div className='pageSize'>
            
            <h2 className="pageStart">    
            </h2>
            
            <br/>
            { ImageSlider && 
            <div style={{ width: '100%',height: '100%'}}>
                <ImageSlider/>
            </div> }
            
            <br/><br/>
  
            <div className="land__write">
                <div className="center">
                    <img className="land__avatar" src={HomeImage} alt="대성주물"></img>
                    <div>
                        <h1>안녕하세요,<br/> 대성주물입니다</h1>
                    </div>
                    
                </div>
                <div className='grayBorder'/>
                
                <h2> 고객이 최우선이 되는 <br className='updown'/>(주)대성주물 입니다.
                    <br/> 46년간의 주물 경력으로<br className='updown'/> 여러 시행착오를 겪으면서
                    <br className='updown'/> 터득한 더욱 단단해진
                    <br className='updown'/> 노하우로 항상 최고의 
                    <br className='updown'/> 품질을 보답하겠습니다. 
                    <br/> 
                    <img src={Arrow} alt="화살표"></img>
                    <br/>
                </h2>
            </div>
        
                
    
            
        </div>
    )
}

export default LandingPage
