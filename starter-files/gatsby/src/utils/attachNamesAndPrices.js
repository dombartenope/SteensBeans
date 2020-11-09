import calculateCoffeePrice from './calculateCoffeePrice';
import formatMoney from './formatMoney';

const attachNamesAndPrices = (order, coffees) => {
    return order.map(item => {
        const coffee = coffees.find(coffee => coffee.id === item.id)
        return {
            ...item,
            name: coffee.name,
            thumbnail: coffee.image.asset.fluid.src,
            price: formatMoney(calculateCoffeePrice(coffee.price, item.size)),
        }
    })
};

export default attachNamesAndPrices;