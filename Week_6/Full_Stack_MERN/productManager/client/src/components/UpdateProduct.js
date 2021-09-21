import React, {useState,useEffect} from "react";
import {navigate} from "@reach/router";
import axios from "axios";
import Form from "./Form";




const UpdateProduct = (props) => {

   
    const [updatedProduct, setUpdatedProduct] = useState({
        title: "",
        description: "",
        price: ""
    })
    const {_id} = props;


useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${_id}`)
    .then((res)=>{
        console.log(res.data);
        setUpdatedProduct(res.data);
    })
    .catch((err)=>console.log(err))
    
},[_id])



const updateHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${_id}`,
    updatedProduct
    )
    .then((res)=>{
        console.log(res)
        navigate("/");
    })
    .catch((err)=>console.log(err))
}








    return (
        <div>
            UpdateProduct
                <Form product={updatedProduct} setProduct={setUpdatedProduct} submitHandler={updateHandler}/>
        </div>
    )
};


export default UpdateProduct;