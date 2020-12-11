import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
export default function Home() {
  return(
      <Layout>
          <Helmet>
            <title>Home page</title>
          </Helmet>
          <h1>I am from Home Page</h1>
      </Layout>
  )
}
