import React, {useEffect} from "react";
import {Link} from "@reach/router";
import axios from "axios";
import DeleteAuthor from "./DeleteAuthor";




const DisplayAll = (props) => {

    const {authorList, setAuthorList} = props;


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res) =>{
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err)=>console.log(err))
    },[])

    const deleteFilter = (id) =>{
        console.log("hello");
        let newList = authorList.filter((author)=> author._id !== id);
        setAuthorList(newList);
    }

    return (
        <div>

            {
                authorList?
                    authorList.map((author, index)=>(
                        <div key={index}>
                            <Link to={`/author/${author._id}`}><p>{author.authorName}</p></Link>
                            <Link to={`/author/edit/${author._id}`}><span>Edit</span></Link>
                            <DeleteAuthor deleteFilter={deleteFilter} id = {author._id}/>
                            
                        </div>
                    ))
                :null
            }
        </div>
    )
};


export default DisplayAll;