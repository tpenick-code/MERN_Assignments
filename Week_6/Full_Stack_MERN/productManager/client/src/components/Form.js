import React from "react";





const Form = (props) => {

    const {submitHandler, product, setProduct} = props;


    const inputHandler = (e) => {
        let newStateObject = {...product};
        newStateObject[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
        setProduct(newStateObject);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input onChange={inputHandler} name = "title" value={product.title} type = "text"/>
                <br/>

                <label>Price</label>
                <input onChange={inputHandler} name = "price" value={product.price} type = "number"/>
                <br/>

                <label>Description</label>
                <input onChange={inputHandler} name = "description" value={product.description} type = "text"/>
                <br/>

                <input type = "submit"/>
            </form>
        </div>
    )
};


export default Form;