import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from '../components/SEO';

const RoastmasterPage = ({ data: { person } }) => {

    return (
        <>
            <SEO title={person.name} image={person.image?.asset?.fluid?.src || '/favicon.svg'}/>
            <div className="center">
                <Img fluid={person.image.asset.fluid} alt={person.name} />
                <h2>
                    <span className="mark">{person.name}</span>
                </h2>
                <p>{person.description}</p>
            </div>
        </>
    )
};

export default RoastmasterPage;

export const query = graphql`
    query($slug: String!) {
        person: sanityPerson(slug: { current: { eq: $slug }}) {
            id
            name
            description
            image {
                asset {
                    fluid(maxWidth: 1000, maxHeight: 750) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;