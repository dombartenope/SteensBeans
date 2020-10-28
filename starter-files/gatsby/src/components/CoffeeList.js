import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const CoffeeGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
`;

const CoffeeStyles = styled.div`
    display: grid;
    /* If browser doesn't support subgrid */
    @supports not (grid-template-rows: subgrid) {
        --rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row: span 3;
    grid-gap: 1rem;
    h2, p {
        margin: 0;
    }
`;

const SingleCoffee = ({ coffee }) => {
    return(
        <CoffeeStyles>
            <Link to={`/coffee/${coffee.slug.current}`}>
                <h2>
                    <span className="mark">{coffee.name}</span>
                </h2>
            </Link>
                <small>{coffee.toppings.map(topping => topping.name).join(', ')}</small>
                <Img fluid={coffee.image.asset.fluid} alt={coffee.name} />
        </CoffeeStyles>
    )
}

const CoffeeList = ({ coffees }) => {
    return (
        <CoffeeGridStyles>
            {coffees.map(coffee => <SingleCoffee key = {coffee.id} coffee = {coffee}/>)}
        </CoffeeGridStyles>
    )
};

export default CoffeeList;
