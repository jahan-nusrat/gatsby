import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../example/Header'

const example = () => {
    return (
        <Layout>
            <Helmet>
                <title>Example page</title>
            </Helmet>
            <h2 className="text-center">I am from Example page</h2>
            <Header />
        </Layout>
    )
}

export default example
