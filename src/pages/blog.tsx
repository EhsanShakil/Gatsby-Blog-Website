import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql, Link } from "gatsby";

function blog({ data }) {
  const repsonse = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <div>
        <h1>Blog Post</h1>
        <h2>
          {repsonse.map((blog: any, index: any) => (
            <div key={index}>
              <h4>{blog.node.title}</h4>
              <p>{blog.node.publicationDate}</p>
              <p>{blog.node.excerpt.excerpt}</p>
              <Link to={`/blog/${blog.node.slug}/`}>Read Mode</Link>
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
          publicationDate(formatString: "DD-MM-YYYY")
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
