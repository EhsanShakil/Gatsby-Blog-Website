import React from "react";
import Layout from "../components/Layout/Layout";

export default ({ pageContext }) => {
  console.log(pageContext.data);
  return (
    <Layout>
      <div>
        <h1>{pageContext.data.title}</h1>
        <p>{pageContext.data.publicationDate}</p>
        <p>{pageContext.data.excerpt.excerpt}</p>
      </div>
    </Layout>
  );
};
