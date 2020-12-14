import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import ImageQuery from '../example/ImageQuery'

const image = () => {
    return (
        <Layout>
            <Helmet>
                <title>Image page</title>
            </Helmet>
            <ImageQuery />
        </Layout>
    )
}

export default image
