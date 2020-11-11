import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import SEO from '../components/SEO';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData'

const CurrentlyRoasting = ({ roastmasters }) => {
    return (
        <div>
            <h2 className="center">
                <span className="master">Roastmasters</span>
            </h2>
            <p className="brown">Come in and meet today's roasters</p>
            {!roastmasters && <LoadingGrid count = {4}/>}
            {roastmasters && !roastmasters?.length && <p>No one is working right now</p>}
            {roastmasters?.length && <ItemGrid items={roastmasters} />}
        </div>
    )
};
const SteensPicks = ({ steensPicks }) => {
    return (
        <div>
            <h2 className="center">
                <span className="master">Steen's Picks:</span>
            </h2>
            <p className="brown">Try some of Kristeen's handpicked favorites</p>
            {!steensPicks && <LoadingGrid count = {4}/>}
            {steensPicks && !steensPicks?.length && <p>She hasn't picked today</p>}
            {steensPicks?.length && <ItemGrid items={steensPicks} />}
        </div>
    )
};

const HomePage = () => {
    const {roastmasters, steensPicks} = useLatestData();
    return (
        <div className="center">
            <SEO title="Home"/>
            <h1 className="mark">The Best Coffee Downtown</h1>
            <p>Open 11am to 3pm Every Single Day</p>
            <HomePageGrid>
                <CurrentlyRoasting roastmasters = {roastmasters}/>
                <SteensPicks steensPicks = {steensPicks}/>
            </HomePageGrid>
        </div>
    )
};

export default HomePage;
