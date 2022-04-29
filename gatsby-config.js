module.exports = {
  siteMetadata: {
    title: `alexkearns.co.uk`,
    siteUrl: `https://www.alexkearns.co.uk`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     "icon": "src/images/icon.png"
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "path": `${__dirname}/src/images/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "path": `${__dirname}/src/content/blog/`,
        "name": 'blog'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "path": `${__dirname}/src/content/talks/`,
        "name": 'talks'
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
  ]
};