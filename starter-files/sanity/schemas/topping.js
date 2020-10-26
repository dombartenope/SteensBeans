import { GiCoffeeBeans as icon } from 'react-icons/gi'

export default {
    name: 'topping',
    title: 'Toppings',
    type: 'document',
    icon, 
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'Name of the topping',
        },
        {
            name: 'dairy',
            title: 'Dairy',
            type: 'boolean',
            description: 'Is there dairy in this drink?',
            options: {
                layout: 'checkbox',
            },
        },
    ],
    preview: {
        select: {
            name: 'name',
            dairy: 'dairy',
        },
        prepare: ({ name, dairy }) => ({
            title: `${name} ${dairy ? '🥛' : ''}`,
        })
    }
}