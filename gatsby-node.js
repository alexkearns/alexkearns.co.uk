const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allFile(
        filter: {sourceInstanceName: {in: ["blog", "talks"]}},
        sort: { fields: childrenMdx___frontmatter___date, order: DESC }
       ) {
        edges {
          node {
            sourceInstanceName
            childMdx {
              id
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create pages.
  const posts = result.data.allFile.edges

  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i+1}`,
      component: path.resolve("./src/templates/PostItemList.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        totalPosts: posts.length
      },
    })
  })

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // The slug generated by gatsby-plugin-mdx doesn't contain a slash at the beginning
      // You can prepend it with any prefix you want
      path: `/${node.sourceInstanceName}/${node.childMdx.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/Post.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.childMdx.id },
    })
  })
}