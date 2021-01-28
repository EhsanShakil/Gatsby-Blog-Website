import React from "react";
import Header from "../components/Header/Header";
import { graphql } from "gatsby";

function index({ data }) {
  console.log(data);
  return (
    <div>
      <Header />
      {data.allContentfulBlogPost.nodes.map((data, index) => (
        <h1 key={index}>{data.title}</h1>
      ))}
    </div>
  );
}

export default index;

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost {
      nodes {
        title
        content {
          raw
        }
      }
    }
  }
`;
