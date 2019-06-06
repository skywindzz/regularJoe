import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//check react icon doc for different icon aggregators /fa is for fontawsome, there are others
import { FaGulp } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Regular" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaGulp />
  </Layout>
)

export default IndexPage
