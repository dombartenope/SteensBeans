import { MdStore as icon } from 'react-icons/md'

export default {
    name: 'storeSettings',
    title: 'Settings',
    type: 'document',
    icon, 
    fields: [
        {
            name: 'name',
            title: 'Store Name',
            type: 'string',
            description: 'Name of the store',
        },
        {
            name: 'roastmasters',
            title: 'Roastmasters Currently Roasting',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person' }] }],
        },
        {
            name: 'steensPicks',
            title: `Steen's Picks of the Day`,
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'coffee' }] }],
        }
    ],
}

