import React, {useState} from "react";
import {navigate} from "@reach/router";
import axios from "axios";
import Form from "./Form";
import Header from "./Header";




const CreateAuthor = (props) => {

    const [errors, setErrors] = useState({});

    //const {authorList, setAuthorList} = props;

    const [newAuthor, setNewAuthor] = useState({
        authorName: "",
    })


const newHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/authors",
    newAuthor
    )
    .then((res)=>{
        console.log(res);
        //setAuthorList([...authorList, res.data])
        console.log(res.data);
        console.log(res.data.author);

        setNewAuthor ({
            authorName:"",
        })
        navigate("/")
    })
    .catch((err)=>{
        setErrors(err.response.data.errors);
        console.log(err)})
}








    return (
        <div>
            <Header link="/" linkText = "Home" subText = "Add a new Author"/>
            <Form author={newAuthor} setAuthor={setNewAuthor} submitHandler={newHandler} errors = {errors}/>
        </div>
    )
};


export default CreateAuthor;