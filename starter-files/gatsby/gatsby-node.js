import path, { resolve } from 'path';

const turnCoffeesIntoPages = async ({ graphql, actions }) => {
    //Get template
    const coffeeTemplate = path.resolve('./src/templates/Coffee.js');

    //Query all coffees
    const { data } = await graphql(`
        query {
            coffees: allSanityCoffee {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    //Loop over each
    data.coffees.nodes.forEach(coffee => {
        actions.createPage({
            path: `coffee/${coffee.slug.current}`,
            component: coffeeTemplate,
            context: {
                slug: coffee.slug.current,
            }
        });
    })
};

const turnToppingsIntoPages = async ({ graphql, actions }) => {
    const toppingsTemplate = path.resolve('./src/pages/coffee.js')

    const { data } = await graphql(`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                }
            }
        }
    `);

    data.toppings.nodes.forEach(topping => {
        actions.createPage({
            path: `topping/${topping.name}`,
            component: toppingsTemplate,
            context: {
                topping: topping.name,
            }
        })
    })
}

const turnRoastmastersIntoPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query {
            roastmasters: allSanityPerson {
                totalCount
                nodes {
                    id
                    name
                    slug {
                        current
                    }
                    description
                }
            }
        }
    `);

    data.roastmasters.nodes.forEach(roastmaster => {
        actions.createPage({
            path: `/roastmaster/${roastmaster.slug.current}`,
            component: resolve('./src/templates/Roastmaster.js'),
            context: {
                name: roastmaster.person,
                slug: roastmaster.slug.current,
            }
        })
    })

    //How many pages and people per page
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount = Math.ceil(data.roastmasters.totalCount / pageSize);
    
    //Count from 1 to n
    Array.from({ length: pageCount }).forEach((_, i) => {
        console.log(`Creating page ${i}`);
        actions.createPage({
            path: `/roastmasters/${i+1}`,
            component: path.resolve(`./src/pages/roastmasters.js`),
            //This data is passed to template 
            context: {
                skip: i * pageSize,
                currentPage: i + 1,
                pageSize,
                
            }
        })
    })
}

export const createPages = async (params) => {
    await Promise.all([
        turnCoffeesIntoPages(params),
        turnToppingsIntoPages(params),
        turnRoastmastersIntoPages(params)
    ])
};