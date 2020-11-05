import { useState } from "react";

const useCoffee = ({ coffee, inputs }) => {
    //State to hold order
    const [order, setOrder] = useState([]);

    //Function to add to order
    const addToOrder = (orderedCoffee) => {
        setOrder([...order, orderedCoffee]);
    }

    //Function to remove from order
    const removeFromOrder = (index) => {
        setOrder([
            ...order.slice(0, index),
            ...order.slice(index + 1),
        ])
    }
    // TODO Send to data to serverless function
    return {
        order,
        addToOrder,
        removeFromOrder,
    }
};

export default useCoffee;