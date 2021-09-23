import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props)=>{

const {link, linkText, subText} = props;

    return(

        <div>
            <h1>Favorite Authors</h1>
            <Link to={link}>{linkText}</Link>
            <p>{subText}</p>
        </div>
    )
}

export default Header;