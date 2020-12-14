import React from 'react'
import earth from '../images/earth.jpg'
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const imageQuery = graphql`
{
    fixed: file(relativePath: {eq: "ocean.jpg"}) {
        childImageSharp {
            fixed(width: 200, height:300, grayscale:true) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    fluid: file(relativePath: {eq: "desert.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    example: file(relativePath: {eq: "desert.jpg"}) {
        childImageSharp {
            fluid(maxWidth:500) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
}
`

const ImageQuery = () => {
    const data= useStaticQuery(imageQuery)
    console.log(data)
    return (
        <section className="container">
            <div className="row justify-content-around">
                <div className="col-lg-3 border text-center rounded py-3">
                    <h3>Basic Image</h3>
                    <img src={earth} alt="earth" className="img-fluid" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse vel dignissimos libero culpa unde quos fuga eaque laborum amet explicabo id, at eius vero soluta? Accusantium tempora neque facilis tenetur.</p>
                </div>
                <div className="col-lg-3 border text-center rounded">
                    <h3>Fixed Image/Blur</h3>
                    <Img fixed={data.fixed.childImageSharp.fixed} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse vel dignissimos libero culpa unde quos fuga eaque laborum amet explicabo id, at eius vero soluta? Accusantium tempora neque facilis tenetur.</p>
                </div>
                <div className="col-lg-3 border text-center rounded">
                    <h3>Fluid Image/Blur</h3>
                    <Img fluid={data.fluid.childImageSharp.fluid} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse vel dignissimo.</p>
                    <Img fluid={data.example.childImageSharp.fluid} />
                </div>
            </div>
        </section>
    )
}

export default ImageQuery
