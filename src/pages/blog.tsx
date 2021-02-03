import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";

function blog({ data }) {
  const repsonse = data.allContentfulBlogPost.edges;
  console.log(data.allContentfulBlogPost.edges);

  return (
    <Layout>
      <div>
        <h1>Blog Post</h1>
        <h2>
          {repsonse.map((blog, index) => (
            <div key={index}>
              <h2>{blog.node.title}</h2>
            </div>
          ))}
        </h2>
      </div>
    </Layout>
  );
}

export default blog;

export const data = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          id
          publicationDate(formatString: "")
          excerpt {
            excerpt
          }
          body {
            raw
          }
        }
      }
    }
  }
`;
