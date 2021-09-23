import React, {useEffect} from "react";
import {Link} from "@reach/router";
import axios from "axios";
import DeleteAuthor from "./DeleteAuthor";
import Header from "./Header";





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
            <Header link="/author/new" linkText = "Add an author" subText = "We have quotes by"/>
            <table>
                <thead>
                    <tr>
                       <th>Author</th>
                       <th>Actions Available</th> 
                    </tr>
                </thead>
                <tbody>
                {
                    authorList?
                    authorList.map((author,index)=>(
                        <tr key={index}>
                            <td>{author.authorName}</td>
                            <td><Link to={`/author/edit/${author._id}`}>Edit</Link>
                            <DeleteAuthor deleteFilter={deleteFilter} id = {author._id}/></td>
                        </tr>
                    ))
                    :null
                }
                </tbody>
            </table>
        </div>
    )

};


export default DisplayAll;





/*return (
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
    )*/




