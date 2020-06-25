import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFrame from "../components/app-frame"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 200px;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <AppFrame>
        <Wrapper>
          <h1>404</h1>
          <p>You were never really here!</p>
        </Wrapper>
      </AppFrame>
    </Layout>
  )
}

export default NotFoundPage
