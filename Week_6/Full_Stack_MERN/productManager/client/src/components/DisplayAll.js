import React, {useEffect} from "react";
import {Link} from "@reach/router";
import axios from "axios";
import DeleteProduct from "./DeleteProduct";




const DisplayAll = (props) => {

    const {productList, setProductList} = props;


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res) =>{
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=>console.log(err))
    },[])

    const deleteFilter = (id) =>{
        console.log("hello");
        let newList = productList.filter((product)=> product._id !== id);
        setProductList(newList);
    }

    return (
        <div>

            {
                productList?
                    productList.map((product, index)=>(
                        <div key={index}>
                            <Link to={`/product/${product._id}`}><p>{product.title}</p></Link>
                            <Link to={`/product/edit/${product._id}`}><span>Edit</span></Link>
                            <DeleteProduct deleteFilter={deleteFilter} id = {product._id}/>
                            
                        </div>
                    ))
                :null
            }
        </div>
    )
};


export default DisplayAll;