import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useParams, useHistory} from "react-router-dom";
import axios from "axios";
import {deleteProduct, detailsProduct} from "../actions/products";

import {Col, Image, Typography, Button} from "antd";
const imgStyle ={width:'100%', objectFit:'cover', height:'150px'}
const { Text, Title } = Typography;

export  default (props)=>{
    const dispatch  = useDispatch();
    const history = useHistory();
    const {id} = useParams(); // Its comes by app router path need to use same object like (:id) for use id (:userid) user userid

    const productDetails = useSelector((state)=>state.allProducts.product);

    const {title, image, price } = productDetails;




    const getProductDetails = async ()=>{
        const resposne = await  axios.get(`https://fakestoreapi.com/products/${id}`).catch((error)=>{
            console.log('Error', error)
        });
        dispatch(detailsProduct(resposne.data))
    }


    useEffect(()=>{
        if(id && id !== '')  getProductDetails();

    },[id])

    const deleteHandler = (e) =>{
        const  productId = e.target.value
        dispatch(deleteProduct(productId))
        history.push('/')
    }


    return(
        <Col className="gutter-row" span={6}  >
            {Object.keys(productDetails).length===0 ?(
                    <div>Loading</div>
            ):(
                <div >
                    <Image style={imgStyle} src={image}   />
                    <Title level={4}>{title}</Title>
                    <Title level={5}>${price}</Title>
                    <button type="submit" value={id} onClick={deleteHandler}> Delete </button>
                </div>
            )}


        </Col>
    )
}