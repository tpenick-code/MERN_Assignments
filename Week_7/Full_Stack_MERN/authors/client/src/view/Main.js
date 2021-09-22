import React, {useState} from "react";
import CreateAuthor from "../components/CreateAuthor";
import DisplayAll from "../components/DisplayAll";




const Main = (props) => {

    const [authorList, setAuthorList] = useState ([]);
    //const [newAuthor, setNewAuthor] = useState ({});

    return (
        <div>
        <h1>Favorite Authors</h1>
            <CreateAuthor authorList={authorList} setAuthorList={setAuthorList}/>
            <DisplayAll authorList={authorList} setAuthorList={setAuthorList}/>
        </div>
    )
};


export default Main;