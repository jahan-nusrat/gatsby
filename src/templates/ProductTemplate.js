import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import Img from "gatsby-image"

const ProductTemplate = ({ data }) => {
    const {product:{description:{description}, price, title, img:{fixed}}} = data;
    return (
        <Layout>
            <div className="container">
                <Link to="/product">
                    <button className="btn btn-info">Back to Products</button>
                </Link>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4">
                        <Img fixed={fixed} alt={title} />
                    </div>
                    <div className="col-lg-5">
                        <h3>Single Product: {title}</h3>
                        <h5>${price}</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleProduct($slug:String) {
        product: contentfulProducts(slug: {eq: $slug}) {
            title
            price
            img {
                fixed(width:300) {
                    ...GatsbyContentfulFixed
                }
            }
            description {
                description
            }
        }
    }  
`

export default ProductTemplate
