module.exports = {
  siteMetadata: {
    title: `Mobile and Web Development — Personal Showcase | Joey Figaro`,
    description: `I'm an RVA native who lives to build interfaces and applications for the web, mobile, and everything in-between.`,
    author: `@joeyfigaro`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        stats: false,
        format: ['woff', 'woff2'],
        fonts: [
          {
            family: 'Ovo',
            variants: [`400`, `600`, `800`]
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `700`, `900`]
          },
          {
            family: `Source Sans Pro`,
            variants: [`200`, `300`, `400`, `600`, `700`]
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
