import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../example/Header'
import HeaderStatic from '../example/HeaderStatic'
import { graphql } from "gatsby"


const example = (props) => {
    const {data} = props;
    return (
        <Layout>
            <Helmet>
                <title>Example page</title>
            </Helmet>
            <h2 className="text-center">I am from Example page</h2>
            <Header />
            <HeaderStatic />
            <h3 className="text-center text-danger">{data.site.info.title}</h3>
        </Layout>
    )
}

export const query = graphql`
    {
        site {
            info: siteMetadata {
                title
                description
                siteUrl
                media {
                    name
                    url
                }
            }
        }
    }
`

export default example
