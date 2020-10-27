import { Link } from 'gatsby';
import React from 'react';

const SingleCoffee = ({ coffee }) => {
    console.log(coffee);
    return(
        <div>
            <Link to={`/coffee/${coffee.slug.current}`}>
                <h2>
                    <span className="mark">{coffee.name}</span>
                </h2>
                <small>{coffee.toppings.map(topping => topping.name).join(', ')}</small>
            </Link>
        </div>
    )
}

const CoffeeList = ({ coffees }) => {
    return (
        <div>
            {coffees.map(coffee => <SingleCoffee key = {coffee.id} coffee = {coffee}/>)}
        </div>
    )
};

export default CoffeeList;
