import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`    
    font-weight: bold;
    .logo {
        transform: translateY(-25%);
    }
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        text-align: center;
        list-style: none;
        align-items: center;
        margin-top: -6rem;
    }
    li {
        --rotate: -2deg;
        transform: rotate(var(--rotate));
        order: 1;
    }
    li:nth-child(1) {
        --rotate: 1deg;
    }
    li:nth-child(2) {
        --rotate: -2.5deg;
    }
    li:nth-child(4) {
        --rotate: 2.5deg;
    }
    a {
        display: block;
        font-size: 3rem;
        text-decoration: none;
        &:hover {
            color: var(--brown);
        }
        &[aria-current="page"] {
            color: var(--brown);
        }
        @media (max-width: 800px) {
            font-size: 2rem;
        }
    }
    @media (max-width: 600px) {
        --columns: 4;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        ul {
            grid-template-rows: auto auto;
            grid-template-columns: repeat(var(--columns), 1fr); 
            justify-items: center;
        }
        .logo-item {
            order: 0;
            grid-column: 1 / -1;
        }
        .logo {
            transform: none;
        }
    }
    @media (max-width: 500px) {
        --columns: 2;
    }
`;

const Nav = () => {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/coffee">Coffee Menu</Link>
                </li>
                <li className = "logo-item">
                    <Link to = "/">
                        <Logo />
                    </Link>
                </li>
                <li>
                    <Link to = "/roastmasters">Roastmasters</Link>
                </li>
                <li>
                    <Link to = "/order">Order Ahead!</Link>
                </li>
            </ul>
        </NavStyles>
    )
};

export default Nav;
