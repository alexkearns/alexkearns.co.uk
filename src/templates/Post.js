import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

const Post = ({data}) => {
  const { body } = data.mdx
  const { title } = data.mdx.frontmatter
  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <link rel="canonical" href="https://www.alexkearns.co.uk" />
      </Helmet>
      <Header title={title} center={true}/>
      <div className={"px-8 sm:px-0 prose prose-img:w-full mx-auto mt-6"}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
    query ArticleQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
            }
        }
    }
`