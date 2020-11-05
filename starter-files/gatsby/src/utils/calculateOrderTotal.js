import calculateCoffeePrice from "./calculateCoffeePrice";

const calculateOrderTotal = (order, coffees) => {
    const total = order.reduce((runningTotal, singleOrder) => {
        const coffee = coffees.find(singleCoffee => singleCoffee.id === singleOrder.id);
        return runningTotal + calculateCoffeePrice(coffee.price, singleOrder.size);
    }, 0)
    return total;
}

export default calculateOrderTotal;