import { graphql } from 'gatsby';
import React, { useState } from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import Img from 'gatsby-image';
import calculateCoffeePrice from '../utils/calculateCoffeePrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';

const order = ({ data }) => {
    const coffees = data.coffee.nodes;

    const { values, updateValue } = useForm ({
        name: '',
        email: '',
    })

    return (
        <>
            <SEO title={`Order a Coffee`}/>
            <OrderStyles>

                <fieldset>
                    <legend>Your Info</legend>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={values.name} 
                        onChange={updateValue}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={values.email}
                        onChange={updateValue}
                    />
                </fieldset>

                <fieldset className="menu">
                    <legend>Menu</legend>
                    {coffees.map(coffee => (
                        <div key={coffee.id}>
                            <Img width="50" height="50" fluid={coffee.image.asset.fluid} alt={coffee.name}/>
                            <div>
                                <h2>
                                    {coffee.name}
                                </h2>
                            </div>
                            <div>
                                {[`S`, `M`, `L`].map(size => (
                                    <button type="button">{size} {formatMoney(calculateCoffeePrice(coffee.price, size))}</button>
                                ))}
                            </div>
                        </div>
                    ))}
                </fieldset>

                <fieldset className="order">
                    <legend>Order</legend>
                </fieldset>

            </OrderStyles>
        </>
    )
}

export default order

export const query = graphql`
    query {
        coffee: allSanityCoffee {
            nodes {
                id
                name
                slug {
                    current
                }
                price
                image {
                    asset {
                        fluid(maxWidth: 100) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;