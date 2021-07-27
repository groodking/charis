import React from 'react';
import { Link } from 'react-router-dom';

export default function Favourite() {
    return (
        <div>
            <h1>These are your favourite items.</h1>
            <br/>
            <br/>
            <br/>
            <Link to="/Product">
            <h4>Back to product List.</h4>
            </Link>
        </div>
    )
}

