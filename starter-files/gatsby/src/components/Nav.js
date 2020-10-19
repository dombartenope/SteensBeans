import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/coffee">Coffee Menu</Link>
                </li>
                <li>
                    <Link to = "/">LOGO</Link>
                </li>
                <li>
                    <Link to = "/roastmasters">Roast Masters</Link>
                </li>
                <li>
                    <Link to = "/order">Order Ahead!</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
