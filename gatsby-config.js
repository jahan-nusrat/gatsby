const config = require("./src/config");
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata:{
        title: config.siteTitle,
        description: config.siteDescription,
        siteUrl:config.siteUrl,
        media: config.socialMedia
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images/`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `posts`,
            path: `${__dirname}/src/posts/`,
          },
        },
        {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: `goaan3yfnb80`,
            accessToken: process.env.ACCESS_TOKEN,
          },
        },
    ],
}
