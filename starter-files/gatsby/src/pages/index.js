import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import SEO from '../components/SEO';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData'

const CurrentlyRoasting = ({ roastmasters }) => {
    return (
        <div>
            {!roastmasters && <LoadingGrid count = {4}/>}
            {roastmasters && !roastmasters?.length && <p>No one is working right now</p>}
        </div>
    )
};
const SteensPicks = ({ steensPicks }) => {
    return (
        <div>
            {!steensPicks && <LoadingGrid count = {4}/>}
            {steensPicks && !steensPicks?.length && <p>She hasn't picked today</p>}
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
