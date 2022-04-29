import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Blog from "../components/blog"

const Home = () => {
  return(
    <Layout>
      <Header title={"Latest posts."}/>
      <Blog/>
    </Layout>
  )
}

export default Home