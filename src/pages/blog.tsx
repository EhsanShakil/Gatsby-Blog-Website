import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql, Link } from "gatsby";

function blog({ data }) {
  const repsonse = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <div>
        <h1>Blog Posts</h1>
        <div className="blogHeader">
          {repsonse.map((blog: any, index: any) => (
            <div key={index} className="blog">
              <img
                className="blogImage"
                src={blog.node.featuredImage.file.url}
                alt="Article Image"
              />
              <p className="blogTitle">{blog.node.title}</p>
              <p className="blogExcerpt">{blog.node.excerpt.excerpt}</p>
              <div className="blogLink">
                <Link className="blogLink" to={`/blog/${blog.node.slug}/`}>
                  Read Mode
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default blog;

export const data = graphql`
  query MyQuery {
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
          description {
            description
          }
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
