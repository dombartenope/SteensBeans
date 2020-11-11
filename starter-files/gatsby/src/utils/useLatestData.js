import { useEffect, useState } from 'react';


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
                `
                    query {
                        StoreSettings (id: "downtown") {
                        name
                        roastmasters {
                            name
                        }
                        steensPicks {
                            name
                        }
                        }
                    }
                `
            }),
        })
            .then(res => res.json())
            .then(res => {
                setSteensPicks(res.data.StoreSettings.steensPicks);
                setRoastmasters(res.data.StoreSettings.roastmasters);
        }); 
    }, [])
    return { steensPicks, roastmasters };
};

export default useLatestData;