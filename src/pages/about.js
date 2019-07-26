import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../components/Globals/Background'
import Info from '../components/Home/Info'

//check react icon doc for different icon aggregators /fa is for fontawsome, there are others



const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Regular" keywords={[`gatsby`, `application`, `react`]} />
    
    <Background
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background" />
    <Info />
  </Layout>
); 

export const query = graphql`
{
  img:file(relativePath:{eq:"about-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
 