import React from "react";
import Layout from "../components/Layout/Layout";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({ pageContext }) => {
  return (
    <Layout>
      <div>
        <h1>{pageContext.data.title}</h1>
        <p>{pageContext.data.publicationDate}</p>
        <p>{pageContext.data.description.description}</p>
        {/* <p>{documentToReactComponents(document, options)}</p> */}
      </div>
    </Layout>
  );
};
