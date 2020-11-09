import { graphql } from 'gatsby';
import React, { useState } from 'react';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import Img from 'gatsby-image';
import calculateCoffeePrice from '../utils/calculateCoffeePrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useCoffee from '../utils/useCoffee';
import CoffeeOrder from '../components/CoffeeOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

const order = ({ data }) => {
    const coffees = data.coffee.nodes;

    const { values, updateValue } = useForm ({
        name: '',
        email: '',
    })

    const { 
        order, 
        addToOrder, 
        removeFromOrder, 
        submitOrder, 
        error, 
        loading, 
        message 
    } = useCoffee({ coffees, values });

    if(message){
        return <p>{message}</p>
    }

    return (
        <>
            <SEO title={`Order a Coffee`}/>
            <OrderStyles onSubmit={submitOrder}>

                <fieldset disabled={loading}>
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

                <fieldset className="menu" disabled={loading}>
                    <legend>Menu</legend>
                    {coffees.map(coffee => (
                        <MenuItemStyles key={coffee.id}>
                            <Img width="50" height="50" fluid={coffee.image.asset.fluid} alt={coffee.name}/>
                            <div>
                                <h2>
                                    <span className="mark">
                                        {coffee.name}
                                    </span>
                                </h2>
                            </div>
                            <div className = "sizes">
                                {[`S`, `M`, `L`].map(size => (
                                    <button key = {size} type="button" onClick={() => addToOrder({
                                        id: coffee.id,
                                        size,
                                    })}>
                                        {size} {formatMoney(calculateCoffeePrice(coffee.price, size))}
                                    </button>
                                ))}
                            </div>
                        </MenuItemStyles>
                    ))}
                </fieldset>

                <fieldset className="order" disabled={loading}>
                    <legend>Order</legend>
                    <CoffeeOrder 
                        order={order} 
                        removeFromOrder={removeFromOrder} 
                        coffees={coffees} 
                    />
                </fieldset>

                <fieldset disabled={loading}>
                    <h3>Your total is {formatMoney(calculateOrderTotal(order, coffees))}</h3>
                    <div>
                        {error ? <p>Error: {error}</p> : ''}
                    </div>
                    <button type="submit" disabled = {loading}>
                        {loading ? 'Placing Order...' : 'Order Ahead'}
                    </button>
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