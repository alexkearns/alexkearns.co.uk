import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import { graphql, useStaticQuery } from "gatsby";
import PostItem from "../components/posts/PostItem";

const Home = () => {
  const items = useStaticQuery(graphql`
      {
        allFile(
            filter: {sourceInstanceName: {in: ["blog", "talks"]}},
            limit: 6,
            sort: {fields: childrenMdx___frontmatter___date, order: DESC}
        ) {
          edges {
            node {
              sourceInstanceName
              childMdx {
                slug
                frontmatter {
                  title
                  tags
                  date
                }
                excerpt(pruneLength: 150, truncate: true)
              }
            }
          }
        }
      }
  `);

  const itemComponents = items.allFile.edges.map(({ node: item }, index) => (
    <PostItem
      key={index}
      slug={`/${item.sourceInstanceName}/${item.childMdx.slug}`}
      alt={item.childMdx.frontmatter.title}
      title={item.childMdx.frontmatter.title}
      date={item.childMdx.frontmatter.date}
      excerpt={item.childMdx.excerpt}
    />
  ));

  return(
    <Layout>
      <Header title={"Latest posts."}/>
      <div className={"container"}>
        <div className={"space-y-6"}>
          {itemComponents}
        </div>
      </div>
    </Layout>
  )
}

export default Home