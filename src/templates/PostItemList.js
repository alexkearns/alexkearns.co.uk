import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import { graphql, Link } from "gatsby";
import PostItem from "../components/posts/PostItem";
import { Helmet } from "react-helmet";

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allFile(
        filter: {sourceInstanceName: {in: ["blog", "talks"]}}
        limit: $limit
        skip: $skip
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
`;

const PostItemList = ({data, pageContext}) => {
  const itemComponents = data.allFile.edges.map(({ node: item }, index) => (
    <PostItem
      key={index}
      slug={`/${item.sourceInstanceName}/${item.childMdx.slug}`}
      alt={item.childMdx.frontmatter.title}
      title={item.childMdx.frontmatter.title}
      date={item.childMdx.frontmatter.date}
      excerpt={item.childMdx.excerpt}
    />
  ));

  const startPost = ((pageContext.currentPage-1)*pageContext.limit)+1
  const endPost = Math.min(pageContext.limit*pageContext.currentPage, pageContext.totalPosts)

  const isNotFirstPage = (pageContext.currentPage !== 1)
  const isNotLastPage = (pageContext.currentPage !== pageContext.numPages)

  let prevPage = pageContext.currentPage-1
  if (prevPage === 1) { prevPage = "" }

  const nextPage = pageContext.currentPage+1

  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All posts</title>
        <link rel="canonical" href="https://www.alexkearns.co.uk" />
      </Helmet>
      <Header title={"All my ramblings."}/>
      <div className={"container"}>
        <div className={"text-lg -mt-4 sm:-mt-10 mb-6"}>
          Page {pageContext.currentPage} of {pageContext.numPages}
        </div>
        <div className={"space-y-6"}>
          {itemComponents}
        </div>
        <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
             aria-label="Pagination">
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing&nbsp;
              <span className="font-medium">
                {startPost}&nbsp;
              </span>
              to&nbsp;
              <span className="font-medium">
                {endPost}&nbsp;
              </span>
              of&nbsp;
              <span className="font-medium">
                {pageContext.totalPosts}&nbsp;
              </span>
              results
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end">
            {isNotFirstPage && <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Link to={`/posts/${prevPage}`}>
                Previous
              </Link>
            </span>}
            {isNotLastPage && <span className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Link to={`/posts/${nextPage}`}>
                Next
              </Link>
            </span>}
          </div>
        </nav>
      </div>
    </Layout>
  )
}

export default PostItemList