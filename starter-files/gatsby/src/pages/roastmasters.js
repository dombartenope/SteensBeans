import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO'

const RoastmasterGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    .master {
        background: var(--tan);
        padding: 5px;
    }
`;

const RoastmasterStyles = styled.div`
    a {
        text-decoration: none;
    }
    .gatsby-image-wrapper {
        height: 400px;
    }
    h2 {
        transform: rotate(-2deg);
        text-align: center;
        font-size: 4rem;
        position: relative;
        margin-bottom: -2rem;
        z-index: 2;
    }
    .description {
        background: var(--brown);
        color: var(--white);
        padding: 1rem;
        margin: 2rem;
        margin-top: -6rem;
        z-index: 2;
        position: relative;
        transform: rotate(1deg);
        text-align: center;
        letter-spacing: 0.2rem;
    }
`;

const roastmasters = ({ data, pageContext }) => {
    const roastmasters = data.roastmasters.nodes;
    console.log(roastmasters);
    return (
        <>
            <SEO title={`Roastmasters - Page ${pageContext.currentPage || 1}`}/>
            <Pagination
                pageSize = {parseInt(process.env.GATSBY_PAGE_SIZE)}
                totalCount = {data.roastmasters.totalCount}
                currentPage = {pageContext.currentPage || 1}
                skip = {pageContext.skip}
                base = "/roastmasters"
            />
            <RoastmasterGrid>
                {roastmasters.map(person => (
                    <RoastmasterStyles>
                        <Link to={`/roastmaster/${person.slug.current}`}>
                            <h2>
                                <span className="master">{person.name}</span>
                            </h2>
                        </Link>
                        <Img fluid={person.image.asset.fluid} alt={person.name} />
                        <p className="description">{person.description}</p>
                    </RoastmasterStyles>
                ))}
            </RoastmasterGrid>
        </>
    )
};

export default roastmasters;

export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 3) {
        roastmasters: allSanityPerson(limit: $pageSize, skip: $skip) {
            totalCount
            nodes {
                id
                name
                slug {
                    current
                }
                description
                image {
                    asset {
                        fluid(maxWidth: 410) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;