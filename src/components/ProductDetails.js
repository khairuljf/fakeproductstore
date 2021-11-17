import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import axios from "axios";
import {detailsProduct} from "../actions/products";

export  default (props)=>{
    const dispatch  = useDispatch();
    const {id} = useParams(); // Its comes by app router path need to use same object like (:id) for use id (:userid) user userid



    const productDetails = useSelector((state)=>state.allProducts.product)

    console.log(id)

    const getProductDetails = async ()=>{
        const resposne = await  axios.get(`https://fakestoreapi.com/products/${id}`).catch((error)=>{
            console.log('Error', error)
        });
        console.log("hello", resposne.data)
        dispatch(detailsProduct(resposne.data))
    }


    useEffect(()=>{
        getProductDetails();
    },[])



    return(
        <div>
            <h1>Product Details</h1>
        </div>
    )
}