import React from 'react'
import { Col, Card, Row } from 'antd';
import S1 from '../ProductImage/S1.jpg';
import S2 from '../ProductImage/S2.jpg';
import S3 from '../ProductImage/S3.jpg';
import S4 from '../ProductImage/S4.jpg';
import S5 from '../ProductImage/S5.jpg';
import S6 from '../ProductImage/S6.jpg';
import S7 from '../ProductImage/S7.jpg';
import S8 from '../ProductImage/S8.jpg';
import S9 from '../ProductImage/S9.jpg';
import S10 from '../ProductImage/S10.jpg';
import S11 from '../ProductImage/S11.jpg';
import S12 from '../ProductImage/S12.jpg';
import S13 from '../ProductImage/S13.jpg';


function Product() {

    return (
        <div>
            <Row gutter={[16, 16]}>
                {S13 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S13} />}
                    >
                    </Card>       
                </Col>
                }
                {S12 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S12} />}
                    >
                    </Card>       
                </Col>
                }
                {S11 &&
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S11} />}
                    >
                    </Card>       
                </Col> }
                {S10 &&
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S10} />}
                    >
                    </Card>       
                </Col> }
                {S9 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S9} />}
                    >
                    </Card>       
                </Col> }
                {S8 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S8} />}
                    >
                    </Card>       
                </Col> }
                {S7 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S7} />}
                    >
                    </Card>       
                </Col> }
                {S6 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S6} />}
                    >
                    </Card>       
                </Col> }
                {S5 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S5} />}
                    >
                    </Card>       
                </Col> }
                {S4 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S4}/>}
                    >
                    </Card>       
                </Col> }
                {S3 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S3} />}
                    >
                    </Card>       
                </Col> }
                {S2 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S2} />}
                    >
                    </Card>       
                </Col> }
                {S1 && 
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={S1} />}
                    >
                    </Card>       
                </Col> }


            </Row>
            


        </div>
    )
}

export default Product
