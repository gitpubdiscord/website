module.exports = {
  siteMetadata: {
    title: `GitPub`,
    description: `Our website.`,
    author: `@gitpubdiscord`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GitPub`,
        short_name: `GitPub`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#141414`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
