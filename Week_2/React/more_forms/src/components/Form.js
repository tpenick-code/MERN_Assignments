import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    //const [firstnameError,setFirstNameError] = useState("");  
    
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
                {firstname.length > 0?
                    firstname.length < 2?
                        <p>First Name must be at least 2 characters</p>
                        :null
                    :null
            }
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName (e.target.value) } />
                </div>
                {lastname.length > 0?
                    lastname.length < 2?
                        <p>Last Name must be at least 2 characters</p>
                        :null
                    :null
            }
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {email.length > 0?
                    email.length < 5?
                        <p>Email must be at least 5 characters</p>
                        :null
                    :null
            }
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {password.length > 0?
                    password.length < 8?
                        <p>Password must be at least 8 characters</p>
                        :null
                    :null
            }
                {password.length>=8 && passwordConfirm.length>0?
                    password !== passwordConfirm ?
                        <p>Passwords do not match</p>
                        :null
                    :null
                }
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
