import React from 'react';
import MenuItemStyles from '../styles/MenuItemStyles';
import Img from 'gatsby-image';
import calculateCoffeePrice from '../utils/calculateCoffeePrice';
import formatMoney from '../utils/formatMoney';

const CoffeeOrder = ({ order, coffees, removeFromOrder }) => {
    return (
        <>
            {order.map((singleOrder, index) => {
            const coffee = coffees.find(coffee => coffee.id === singleOrder.id);
                return (
                    <MenuItemStyles key={singleOrder.id}>
                    <Img fluid={coffee.image.asset.fluid} />
                    <h2>{coffee.name}</h2>
                    <p>{formatMoney(calculateCoffeePrice(coffee.price, singleOrder.size))}</p>
                    <button 
                        type="button" 
                        className="remove" 
                        title={`Remove ${singleOrder.size} ${coffee.name} from order`}
                        onClick={() => removeFromOrder(index)}
                    >
                        &times;
                    </button>
                </MenuItemStyles>
                )
            })}
        </>
    )
};

export default CoffeeOrder;
