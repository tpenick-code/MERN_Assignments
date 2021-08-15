import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");  
    
    const createUser = (e) => {
                e.preventDefault();
    
        const newUser = { 
            firstname: firstname,
            lastname: lastname, 
            email: email, 
            password: password,
            passwordConfirm: passwordConfirm 
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName (e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName (e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPasswordConfirm (e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h3>Your Form Data</h3>
                <p><label>First Name: </label>{firstname}</p>
                <p><label>Last Name: </label>{lastname}</p>
                <p><label>Email: </label> {email}</p>
                <p><label>Password:</label> {password}</p>
                <p><label>Confirm Password:</label> {passwordConfirm}</p>
            </div>
        </div>

            
        
    );
    };
    
export default Form;
