import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom'
import {  Col, Image, Typography, Space, Button } from 'antd';
const style = { background: '#0092ff', padding: '8px 10px', margin:'5px 0' };
const imgStyle ={width:'100%', objectFit:'cover', height:'150px'}


const { Text, Title } = Typography;

export default ()=>{

    const products = useSelector((state)=>state.allProducts.products)
    const ProductList = products.map((product)=>{
    const {id, title, image, description, price } = product;


      return (
          <Col className="gutter-row" span={6}  key={id}>
              <div style={style}>
                  <Image style={imgStyle} src={image}   />
                  <Link to={`/productdetails/${id}`}>
                      <Title level={4}>{title}</Title>
                  </Link>
                  <Title level={5}>${price}</Title>
              </div>

          </Col>
      )
    })

    return ProductList;

}