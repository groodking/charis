import React from 'react';
import { Link } from 'react-router-dom';

export default function Added() {
    return (
        <div>
            <h1>This is your Shopping Cart.</h1>
            <br/>
            <br/>
            <br/>
            <Link to="/Product">
            <h4>Back to Product List.</h4>
            </Link>
        </div>
    )
}

