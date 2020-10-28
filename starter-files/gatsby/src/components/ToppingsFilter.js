import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
        display: grid;
        padding: 5px;
        grid-template-columns: auto 1fr;
        grid-gap: 5px;
        background: var(--grey);
        align-items: center;
        border-radius: 2px;
    }
    .count {
        background: white;
        padding: 2px 5px;

    }
    .active {
        background: var(--brown);
    }
`;

const countCoffeeInToppings = (coffees) => {
    const counts =  coffees
        .map(coffee => coffee.toppings)
        .flat()
        .reduce((acc, topping) => {
            const existingTopping = acc[topping.id];
            if(existingTopping) {
                existingTopping.count += 1;
            } else {
                acc[topping.id] = {
                    id: topping.id,
                    name: topping.name,
                    count: 1,
                }
            }
            return acc;
        }, {});
        const sortedToppings = Object.values(counts).sort((a, b) => b.count - a.count)
        return sortedToppings;
}

const ToppingsFilter = () => {
    const { toppings, coffees } = useStaticQuery(graphql`
        query {
            toppings: allSanityTopping {
                nodes {
                    id
                    name
                    dairy
                }
            }
            coffees: allSanityCoffee {
                nodes {
                    toppings {
                        name
                        id
                    }
                }
            }
        }
    `);

    const toppingsWithCounts = countCoffeeInToppings(coffees.nodes);
    console.log(toppingsWithCounts);

    return (
        <ToppingsStyles>
            {toppingsWithCounts.map(topping => (
                <Link to={`/topping/${topping.name}`} key={topping.id}>
                    <span className="name">{topping.name}</span>
                    <span className="count">{topping.count}</span>
                </Link>
            ))}
        </ToppingsStyles>
    )
};

export default ToppingsFilter;

