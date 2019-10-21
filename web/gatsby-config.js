// Load variables from `.env` as soon as possible
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
require('dotenv').config()

// const clientConfig = require('./client-config')

// const isProd = process.env.NODE_ENV === 'production'
console.log(process.env.SANITY_TOKEN)

module.exports = {
  siteMetadata: {
    title: `GATB`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Asa Smith <asa@asasmith.com>`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        // ...clientConfig.sanity,
        projectId: '0f8uv874',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: false,
        overlayDrafts: true,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatb`,
        short_name: `gatb`,
        start_url: `/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
