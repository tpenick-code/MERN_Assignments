import React from "react";





const Form = (props) => {

    const {submitHandler, author, setAuthor, errors} = props;


    const inputHandler = (e) => {
        let newStateObject = {...author};
        newStateObject[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
        setAuthor(newStateObject);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input onChange={inputHandler} name = "authorName" value={author.authorName} type = "text"/>
                {   
                    errors.authorName ?
                    <span>{errors.authorName.message}</span>
                    : null
                }
                <br/>

                <input button text="Add New author" type = "submit" />
                
            </form>
        </div>
    )
};


export default Form;