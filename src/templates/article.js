import * as React from "react"
import  PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Article = ({ data }) => {
   const post = data.nodeArticle;

   return (
       <Layout>
           <h1>{post.title}</h1>
           <img 
            src={post.relationships.field_media_image.relationships.field_media_image.localFile.publicURL }
            alt={post.relationships.field_media_image.field_media_image.alt}
           />

          <div dangerouslySetInnerHTML={{__html: post.body.processed }}></div>
       </Layout>
   )
};

Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($ArticleId: String!) {
      nodeArticle( id: { eq: $ArticleId }){
      id
      title
      body {
        processed
      }
      relationships {
        field_media_image {
          relationships {
            field_media_image {
              localFile {
                publicURL
              }
            }
          }
          field_media_image {
            alt
          }
        }
      }
    }
  }
`;

export default Article;