import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Christian, a full-stack developer living in beutiful Delaware</h2>
      <p>Need a developer? <Link to="/contact" >Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage
