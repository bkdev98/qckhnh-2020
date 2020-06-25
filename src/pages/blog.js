import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFrame from "../components/app-frame"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <AppFrame name="Blog" />
    </Layout>
  )
}

export default BlogPage
