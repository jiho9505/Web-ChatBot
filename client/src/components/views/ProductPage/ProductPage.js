import React from 'react'
import Product from './Product/Product';
import { Typography } from "antd";

const { Title } = Typography

function ProductPage() {

    return (
    <div className='pageSize'>

        <h2 className="pageStart">
            제품 샘플
        </h2>
        <div className='grayBorder'/>
        <Title level={5}>이외에도 더 다양한 제품들이 가능합니다!</Title>
        <br/>
        <Product />
        
 
    </div>
    )
}

export default ProductPage
