import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx";
import Header from "../components/Header";

const Post = ({data}) => {
    const { body } = data.mdx
    const { title } = data.mdx.frontmatter
    return(
      <Layout>
        <div>
            <Header title={title} center={true}/>
            <div className={"prose prose-img:w-full mx-auto mt-6"}>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
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