import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductPage() {
    return (
        <div>
            <h1>This is the Product Page.</h1>
            <br/>
            <br/>
            <br/>
            <Link to="/charis">
            <h4>Back to home page.</h4>
            </Link>
        </div>
    )
}

