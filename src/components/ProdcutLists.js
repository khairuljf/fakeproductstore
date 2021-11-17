import React, {useEffect} from "react";
import { Row, Col } from 'antd';
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addProduct} from "../actions/products";


const ProductList = ()=>{
    const products = useSelector((state)=>state)
    const dispatch = useDispatch()

    const fetchProduct = async ()=>{
        const response =  await  axios.get("https://fakestoreapi.com/products").catch((error)=>{
            console.log("error", error)
        });

        dispatch(addProduct(response.data))
    }

    useEffect(()=>{
        fetchProduct()
    }, [])


    return(
        <Row gutter={16}>
            <Product />
        </Row>
    )
}

export default ProductList;