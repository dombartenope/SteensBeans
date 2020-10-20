import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
    margin-bottom: 3rem;
    font-weight: bold;
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        text-align: center;
        list-style: none;
        align-items: center;
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
        font-size: 3rem;
        text-decoration: none;
        &:hover {
            color: var(--brown);
        }
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
                <li>
                    <Link to = "/">
                        <Logo />
                    </Link>
                </li>
                <li>
                    <Link to = "/roastmasters">Roast Masters</Link>
                </li>
                <li>
                    <Link to = "/order">Order Ahead!</Link>
                </li>
            </ul>
        </NavStyles>
    )
};

export default Nav;
