import React from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
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

const HeaderStatic = () => (
    <StaticQuery query={query}
        render={data =>{
            return (
                <div className="container">
                    <h3>{data.site.info.description}</h3>
                </div>
            )
        }}
    >
    </StaticQuery>
)

export default HeaderStatic
