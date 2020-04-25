import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logo from "../images/logo.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Name = styled.h1`
  font-family: "Lexend Giga", sans-serif;
  font-size: 5em;
  margin: 0.5em 0;
  @media (max-width: 400px) {
    font-size: 4em;
  }
`

const Image = styled.img`
  width: 10em;
  margin-right: 2em;
  @media (max-width: 600px) {
    margin-right: 0;
  }
  @media (max-width: 400px) {
    width: 8em;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Image src={logo} />
      <Name>GitPub</Name>
    </Container>
  </Layout>
)

export default IndexPage
