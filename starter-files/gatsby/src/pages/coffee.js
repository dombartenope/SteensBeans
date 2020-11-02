import { graphql } from 'gatsby';
import React from 'react';
import CoffeeList from '../components/CoffeeList';
import ToppingsFilter from '../components/ToppingsFilter';

const coffee = ({ data, pageContext }) => {

    const coffees = data.coffee.nodes;

    return (
        <>
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