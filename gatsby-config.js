const config = require("./src/config");

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
  ],
}
