require("dotenv").config();
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Alpha Universe",
    description: "Description of your Gatsby site",
    author: "Chirag Verma",
    siteUrl: "https://www.yoursite.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: process.env.MONGODB_CONNECTION_STRING,
        dbName: 'alpha_database',
        collection: 'wp_users',
        extraParams: {
          ssl: true,
          authSource: 'admin',
        },
      },
    },
  ],
}
