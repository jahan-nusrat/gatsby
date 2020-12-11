import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const product = () => {
    return (
        <Layout>
            <Helmet>
                <title>Product page</title>
            </Helmet>
            <h2>I am from Product page</h2>
        </Layout>
    )
}

export default product;
