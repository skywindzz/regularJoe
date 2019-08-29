import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../components/Globals/Background'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'

//check react icon doc for different icon aggregators /fa is for fontawsome, there are others



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Regular" keywords={[`gatsby`, `application`, `react`]} />
    
    <Background
      img={data.img.childImageSharp.fluid}
      title="regular joe's"
      styleClass="default-background" />
    <Info />
    <Menu items={data.menu} />
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

  menu: allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width: 50, height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
export default IndexPage
