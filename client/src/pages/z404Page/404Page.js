import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h2>404!</h2>
        <Link to="/">Go home</Link>
        <br />
        <Link to="/">
        	<img src="../../../assets/images/lostman.png" alt="404 Page" />
        </Link>
    </div>
); 

export default NotFoundPage;
