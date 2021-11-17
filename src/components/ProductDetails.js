import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {detailsProduct} from "../actions/products";
import {Col, Image, Typography, Button} from "antd";
const imgStyle ={width:'100%', objectFit:'cover', height:'150px'}
const { Text, Title } = Typography;

export  default (props)=>{
    const dispatch  = useDispatch();
    const {id} = useParams(); // Its comes by app router path need to use same object like (:id) for use id (:userid) user userid

    const productDetails = useSelector((state)=>state.allProducts.product);

    console.log(productDetails)

    const {title, image, description, price } = productDetails;

    const getProductDetails = async ()=>{
        const resposne = await  axios.get(`https://fakestoreapi.com/products/${id}`).catch((error)=>{
            console.log('Error', error)
        });
        dispatch(detailsProduct(resposne.data))
    }


    useEffect(()=>{
        getProductDetails();
    },[])



    return(
        <Col className="gutter-row" span={6}  >
            {Object.keys(productDetails).length===0 ?(
                    <div>Loading</div>
            ):(
                <div >
                    <Image style={imgStyle} src={image}   />
                    <Title level={4}>{title}</Title>
                    <Title level={5}>${price}</Title>
                </div>
            )}


        </Col>
    )
}