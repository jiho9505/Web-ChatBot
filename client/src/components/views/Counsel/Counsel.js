import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Message from './Message/Message';

function Counsel() {
    
    const [allMessage, setallMessage] = useState([])

    useEffect(() => {

        eventQuery('welcomeToMyWebsite')

    }, [])


    const textQuery = async (text) => {

        let conversations = {
            who: '손님',
            content: {
                text: {
                    text: text
                }
            }
        }
    
       
    
        const textQueryVariables = {
            text
        }

        try {
            
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

            for (let content of response.data.fulfillmentMessages) {

                let conversation = {
                    who: 'AI 상담요원',
                    content: content
                }
            
                setallMessage([...allMessage,conversations,conversation])
            } 


        } catch (error) {
            let conversation = {
                who: 'AI 상담요원',
                content: {
                    text: {
                        text: "에러가 발생하였습니다. 다시 시도해주세요."
                    }
                }
            }

            setallMessage([...allMessage,conversations,conversation])


        }

    }


    const eventQuery = async (event) => {

        const eventQueryVariables = {
            event
        }
        try {

            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            for (let content of response.data.fulfillmentMessages) {
                
                let conversation = {
                    who: 'AI 상담요원',
                    content: content
                }

                setallMessage([...allMessage,conversation])
            }


        } catch (error) {
            let conversation = {
                who: 'AI 상담요원',
                content: {
                    text: {
                        text: "에러가 발생하였습니다. 다시 시도해주세요."
                    }
                }
            }
            setallMessage([...allMessage,conversation])
        }           

    }


    const keyPressHanlder = (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('최소 1글자 이상 입력해주시기 바랍니다.')
            }

            textQuery(e.target.value)
            e.target.value = "";
        }
    }


    const renderOneMessage = (message, i) => {
        console.log('message', message)

     
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        }
    }

    const renderMessage = (returnedMessages) => {

        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    }


    return (
        <div className='pageSize'>

            <h2 className="pageStart">
                견적 및 상담 요청 - AI
            </h2>
            <div className='grayBorder'/>
            <br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{
                height: 600, width: 700,
                border: '3px solid black', borderRadius: '6px'
                }}>
                    <div style={{ height: 544, width: '100%', overflow: 'auto' }}>


                        {renderMessage(allMessage)}


                    </div>
                    <input
                        style={{
                            margin: 0, width: '100%', height: 50,
                            borderRadius: '4px', padding: '5px', fontSize: '1rem'
                        }}
                        placeholder="입력해주시기 바랍니다..."
                        onKeyPress={keyPressHanlder}
                        type="text"
                    />

                </div>
            </div>
            <br/>
        </div>
        
    )
}

export default Counsel;