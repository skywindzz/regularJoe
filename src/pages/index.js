import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../components/Globals/Background'

//check react icon doc for different icon aggregators /fa is for fontawsome, there are others



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Regular" keywords={[`gatsby`, `application`, `react`]} />
    
    <Background
      img={data.img.childImageSharp.fluid}
      title="regular joe's"
      styleClass="default-background" />
  </Layout>
); 

export const query = graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage
