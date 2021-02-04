import React from "react";
import Layout from "../components/Layout/Layout";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({ pageContext }) => {
  return (
    <Layout>
      <div className="blogpost">
        <h1>{pageContext.data.title}</h1>
        <p>Published on {pageContext.data.publicationDate}</p>
        <img
          className="blogpostImage"
          src={pageContext.data.featuredImage.file.url}
          alt="Blog Image"
        />
        <p>{pageContext.data.description.description}</p>
      </div>
    </Layout>
  );
};
