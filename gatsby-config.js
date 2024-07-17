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
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: 'mongodb+srv://alphauser:alphauserpw@alphauniverse.vbhyo7i.mongodb.net/?retryWrites=true&w=majority&appName=Alphauniverse',
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
