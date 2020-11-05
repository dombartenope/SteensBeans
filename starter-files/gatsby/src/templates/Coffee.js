import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const CoffeeGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    ul {
        list-style: circle;
    }
    h4 {
        align-content: center;
    }
`;

const singleCoffeePage = ({ data: { coffee } }) => {
    console.log(coffee)
    return (
        <>
        <SEO title={coffee.name} image={coffee.image?.asset?.fluid?.src} />
        <CoffeeGrid>
            <Img fluid={coffee.image.asset.fluid} alt={coffee.name}/>
            <div>
                <h1 className="mark">{coffee.name}</h1>
                <br/>
                <h4 className="mark">Toppings</h4>
                    <ul>
                        {coffee.toppings.map(topping => <li key={topping.id}>
                            {topping.dairy ? `${topping.name} 🥛` : topping.name}
                        </li>)}
                    </ul>
                <h4 className = "mark">Beans</h4>
                    <ul>
                        <li>{coffee.beans}</li>
                    </ul>
                <h4 className="mark">Roast</h4>
                    <ul>
                        <li>{coffee.roast}</li>
                    </ul>
                <small>(🥛 = Contains Dairy)</small>
            </div>
        </CoffeeGrid>
        </>
    )
};

export default singleCoffeePage;

export const query = graphql`
    query($slug: String!) {
        coffee: sanityCoffee( slug: {
            current: {
                eq: $slug
            }
        }) {
            id
            name
            beans
            roast
            image {
                asset {
                    fluid(maxWidth: 800) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            toppings {
                id
                name
                dairy
            }
        }
    }
`;