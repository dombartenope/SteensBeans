import { BiCoffee as icon } from 'react-icons/bi'
import PriceInput from '../components/PriceInput'

export default {
    name: 'coffee',
    title: 'Coffees',
    type: 'document',
    icon, 
    fields: [
        {
            name: 'name',
            title: 'Coffee Name',
            type: 'string',
            description: 'Name of the coffee',
        },
        {
            name: 'beans',
            title: 'Coffee Beans',
            description: 'What type of coffee beans?',
            type: 'string',
        },
        {
            name: 'roast',
            title: 'Roast',
            type: 'string',
            description: 'What type of roast?'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the coffee in cents',
            validation: Rule => Rule.min(200),
            //TODO: Add custom component
            inputComponent: PriceInput,
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'topping'}]}]
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: ({ title, media, ...toppings }) => {
            const tops = Object.values(toppings).filter(Boolean)

            return {
                title,
                media,
                subtitle: tops.join(', '),
            }
        }
    }
}

