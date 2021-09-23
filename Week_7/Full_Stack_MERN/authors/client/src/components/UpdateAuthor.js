import React, {useState,useEffect} from "react";
import {navigate} from "@reach/router";
import axios from "axios";
import Form from "./Form";
import Header from "./Header";




const UpdateAuthor = (props) => {

    const [errors, setErrors] = useState({});

   
    const [updatedAuthor, setUpdatedAuthor] = useState({
        authorName: "",
    })
    const {_id} = props;


useEffect(()=>{
    axios.get(`http://localhost:8000/api/authors/${_id}`)
    .then((res)=>{
        console.log(res.data);
        setUpdatedAuthor(res.data);
    })
    .catch((err)=>console.log(err))
    
},[_id])



const updateHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${_id}`,
    updatedAuthor
    )
    .then((res)=>{
        console.log(res)
        navigate("/");
    })
    .catch((err)=>{
        setErrors(err.response.data.errors);
        console.log(err)})
    
}








    return (
        <div>
            <Header link="/" linkText = "Home" subText = "Edit this author"/>
            <Form author={updatedAuthor} setAuthor={setUpdatedAuthor} submitHandler={updateHandler}errors = {errors}/>
        </div>
    )
};


export default UpdateAuthor;