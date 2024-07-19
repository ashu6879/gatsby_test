require("dotenv").config();

console.log("MongoDB Connection String:", process.env.MONGODB_CONNECTION_STRING);

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
        dbName: process.env.DB_name,
        collection: process.env.collection,
        extraParams: {
          ssl: true,
          authSource: 'admin',
        },
      },
    },
  ],
};
