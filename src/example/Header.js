import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyleBtn=styled.button`
    background-color: orange;
    color: white;
    margin-left: 1rem;
`

//***************Alternative
// const query=graphql`
//     query GetData {  //query GetData(should be unique)
//         site{
//             info: siteMetadata{  //info is used as an alias of siteMetadata
//                 title
//                 description
//                 siteUrl
//                 media {
//                     name
//                     url
//                 }
//             }
//         }
//     }
// `

const Header = () => {
    //const {site:{siteMetadata:{description,media}}} =useStaticQuery(query)    //alternative
    const data = useStaticQuery(graphql`
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
    `)
    const {site:{info:{description,media}}} = data;
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
                            <StyleBtn className="btn">Delete</StyleBtn>
                        </li>
                    )
                })
            }
            </ol>
        </div>
    )
}

export default Header
