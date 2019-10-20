// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

// const clientConfig = require('./client-config')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `GATB`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Asa Smith <asa@asasmith.com>`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        // ...clientConfig.sanity,
        projectId: '0f8uv874',
        dataset: 'production',
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    }
  ]
}
