import React, {useState,useEffect} from "react";
import axios from "axios";
import DeleteAuthor from "../components/DeleteAuthor";




const OneAuthor= (props) => {

    const {_id} = props;
    const [oneAuthor, setOneAuthor] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then((res)=>{
            console.log(res.data);
            setOneAuthor(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])

    

    return (
        <div>
            <h1>Author Details</h1>
            <p>{oneAuthor.authorName}</p>
            <DeleteAuthor id = {_id}/>
        </div>
    )
};


export default OneAuthor;