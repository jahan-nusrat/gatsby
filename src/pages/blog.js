import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet';

const blog = () => {
    return (
        <Layout>
            <Helmet>
                <title>Blog page</title>
            </Helmet>
            <h2 className="text-center text-uppercase text-primary">I am from blog page</h2>
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ullam ratione error quia odio temporibus nihil, nulla repellendus omnis. Suscipit ea voluptas repudiandae facere? Alias quia et nesciunt aliquid maiores.</p>
                    </div>
                    <div className="col-lg-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ullam ratione error quia odio temporibus nihil, nulla repellendus omnis. Suscipit ea voluptas repudiandae facere? Alias quia et nesciunt aliquid maiores.</p>
                    </div>
                    <div className="col-lg-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ullam ratione error quia odio temporibus nihil, nulla repellendus omnis. Suscipit ea voluptas repudiandae facere? Alias quia et nesciunt aliquid maiores.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default blog
