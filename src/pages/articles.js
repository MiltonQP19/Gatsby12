import * as React from "react"
import  PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import Seo from "../components/seo";
import ArticlePreview from "../components/articlePreview";

const Articles = ({ data }) => { 
    const articles = data.allNodeArticle.nodes;
 
    return (
        <Layout>
            <Seo title="Articles"></Seo>
            <h1>Articles</h1>

            { articles.map(article => (
                <ArticlePreview
                key= {article.id}
                title= {article.title}
                path = {article.path.alias}
                image = {article.relationships.field_media_image.relationships.field_media_image.localFile.publicURL}
                alt = {article.relationships.field_media_image.field_media_image.alt}
                summary = {article.body.processed.substring(0,300)}
                ></ArticlePreview>
            ))}
            
        </Layout>
    )
 };

 Articles.propTypes = {
    data: PropTypes.object.isRequired,
  };


  export const data = graphql`
  {
    allNodeArticle(sort: {fields: created, order: DESC}) {
      nodes {
        body {
          processed
        }
        created
        relationships {
          field_media_image {
            field_media_image {
              alt
            }
            relationships {
              field_media_image {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
        path {
          alias
        }
        title
      }
    }
  }
`;

export default Articles;