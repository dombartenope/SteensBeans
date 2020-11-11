import { useEffect, useState } from 'react';

//For highlighting graphql below
const gql = String.raw;

//Query for both roastmasters and picks
const details = gql`
    name
    _id
    image {
        asset {
            url
            metadata {
                lqip
            }
        }
    }
`;

const useLatestData = () => {
    //Steens Picks
    const [steensPicks, setSteensPicks] = useState();
    
    //Roastmasters
    const [roastmasters, setRoastmasters] = useState();
    
    //On mount fetch the data for the homepage
    useEffect(() => {
        const ENDPOINT = process.env.GATSBY_GRAPHQL_ENDPOINT;
        fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query:  
                gql`
                    query {
                        StoreSettings (id: "downtown") {
                            name
                            roastmasters {
                                ${details}
                            }
                            steensPicks {
                                ${details}
                            }
                        }
                    }
                `
            }),
        })
            .then(res => res.json())
            .then(res => {
                setSteensPicks(res.data.StoreSettings.steensPicks);
                setRoastmasters(res.data.StoreSettings.roastmasters);}) 
            .catch(err => {
                console.log(err);
            })
    }, [])
    return { steensPicks, roastmasters };
};

export default useLatestData;