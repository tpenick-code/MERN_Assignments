import React, {useState,useEffect} from "react";
import axios from "axios";
import DeleteProduct from "../components/DeleteProduct";




const OneProduct= (props) => {

    const {_id} = props;
    const [oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then((res)=>{
            console.log(res.data);
            setOneProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])

    

    return (
        <div>
            <p>{oneProduct.title}</p>
            <p>{oneProduct.description}</p>
            <p>{oneProduct.price}</p>
            <DeleteProduct id = {_id}/>
        </div>
    )
};


export default OneProduct;