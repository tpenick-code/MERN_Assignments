import React from "react";
import {navigate} from "@reach/router";
import axios from "axios";
//import Form from "./Form";



const DeleteProduct = (props) => {

    const {id, deleteFilter} = props;

    const deleteHandler = (e)=> {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            if(deleteFilter) {
                console.log(res.data);
                deleteFilter(id);
            }
            else{
                console.log(res.data);
                navigate("/");
            }
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
       <button onClick = {deleteHandler}>Delete</button>
    )
}


export default DeleteProduct;