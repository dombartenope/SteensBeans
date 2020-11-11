import { useContext, useState } from "react";
import OrderContext from "../components/OrderContext";
import calculateOrderTotal from "./calculateOrderTotal";
import formatMoney from "./formatMoney";
import attachNamesAndPrices from "./attachNamesAndPrices";

const useCoffee = ({ coffees, values }) => {
    //State to hold order
    const [order, setOrder] = useContext(OrderContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

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

    //Function when form is submitted
    const submitOrder = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        //gather data
        const body = {
            order: attachNamesAndPrices(order, coffees),
            total: formatMoney(calculateOrderTotal(order, coffees)),
            name: values.name,
            email: values.email,
            coffeeCreamer: values.coffeeCreamer,
        }
        
        //Send to data to serverless function
        const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const text = JSON.parse(await res.text());

        //Check if function worked
        if(res.status >= 400 && res.status < 600) {
            setLoading(false);
            setError(text.message);
        } else {
            setLoading(false);
            setMessage(`Success! Come on down for your coffee!`)
        }
    }

    return {
        order,
        addToOrder,
        removeFromOrder,
        submitOrder,
        error,
        loading,
        message,
    }
};

export default useCoffee;