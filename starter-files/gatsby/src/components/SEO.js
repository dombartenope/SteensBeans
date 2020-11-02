import { useStaticQuery } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ children, location, description, title, image}) => {

    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    twitter
                }
            }
        }
    `)

    return (
        <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
            <html lang="en"/>
        </Helmet>
    )
}

export default SEO
