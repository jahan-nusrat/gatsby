import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
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
    `)
    const {site:{siteMetadata:{description,media}}} = data;
    return (
        <div className="container mt-4">
            <p>{description}</p>
            <ol>
            {
                media.map((media,idx) =>{
                    return (
                        <li key={idx}>
                            <h5>Name: {media.name}</h5>
                            <a href={media.url}>{media.url}</a>
                        </li>
                    )
                })
            }
            </ol>
        </div>
    )
}

export default Header
