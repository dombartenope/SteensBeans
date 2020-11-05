import { graphql } from 'gatsby';
import React from 'react';
import CoffeeList from '../components/CoffeeList';
import SEO from '../components/SEO';
import ToppingsFilter from '../components/ToppingsFilter';

const coffee = ({ data, pageContext }) => {

    const coffees = data.coffee.nodes;

    return (
        <>
            <SEO title={pageContext.topping ? `Coffees With ${pageContext.topping}` : `All Coffees` }/>
            <ToppingsFilter activeTopping = {pageContext.topping}/>
            <CoffeeList coffees = {coffees} />
        </>
    )
};

export default coffee;

export const query = graphql`
    query ($topping: [String]){
        coffee: allSanityCoffee (filter: {
            toppings: {
                elemMatch: {
                    name: {
                        in: $topping
                    }
                }
            }
        }){
            nodes {
                id
                slug {
                    current
                }
                name
                beans
                roast
                price
                toppings {
                    id
                    name
                }
                image {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;