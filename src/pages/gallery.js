import * as React from "react"
import { Link } from "gatsby"
import  PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby";


const Gallery = ({data}) => (

    <Layout>
        <Seo title="Image Gallery"></Seo>
        <h1>Image Gallery</h1>
        <Img fluid={data.astronautimage.childImageSharp.fluid}></Img>
        <Img fixed={data.gatsbyIcon.childImageSharp.fixed}></Img>
    </Layout>
    

);
Gallery.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    gatsbyIcon: file(relativePath: {eq: "gatsby-icon.png"}){
      childImageSharp{
        fixed(width: 112) {
          ...GatsbyImageSharpFixed
        }
  
      }
    }
    astronautimage: file(relativePath: {eq: "gatsby-astronaut.png"}){
        childImageSharp{
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;

export default Gallery
