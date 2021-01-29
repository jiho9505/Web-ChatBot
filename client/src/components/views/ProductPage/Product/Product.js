import React from 'react'
import { Col, Card, Row } from 'antd';
import ProductImage from '../ProductImage/sample.jpg';

function Product() {

    return (
        <div>
            <Row gutter={[16, 16]}>

                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={`${ProductImage}`} />}
                    >
                    </Card>       
                </Col>
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={`${ProductImage}`} />}
                    >
                    </Card>       
                </Col>
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={`${ProductImage}`} />}
                    >
                    </Card>       
                </Col>
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={`${ProductImage}`} />}
                    >
                    </Card>       
                </Col>
                <Col lg={6} md={8} xs={12}>
                    <Card
                        cover={<img src={`${ProductImage}`} />}
                    >
                    </Card>       
                </Col>

            </Row>
            


        </div>
    )
}

export default Product
