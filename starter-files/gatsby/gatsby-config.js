import dotenv from 'dotenv';
dotenv.config({ path: '.env' })

export default {
    siteMetadata: {
        title: 'Steens Beans',
        siteUrl: 'https://steens.beans',
        description: 'The best coffee in New Jersey!'
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'trc74g0h',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            }
        }
    ]
};