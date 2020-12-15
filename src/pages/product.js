import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import {graphql} from 'gatsby';

const product = ({data}) => {
    const {allContentfulProducts:{nodes:products}} = data;
    return (
        <Layout>
            <Helmet>
                <title>Product page</title>
            </Helmet>
            <section className="container">
                <div className="row justify-content-center">
                    {
                        products.map(product =>{
                            return <ProductCard product={product} key={product.id} />
                        })
                    }
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    {
        allContentfulProducts {
            nodes {
                id
                title
                description {
                    description
                }
                price
                slug
                img {
                    fluid {
                        src
                    }
                }
            }
        }
    }
`

export default product;
