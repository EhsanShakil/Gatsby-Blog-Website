import React from "react";

export default ({ pageContext }) => {
  console.log(pageContext.name);
  return (
    <div>
      <p>Hello Dynamic Page from {pageContext.name}</p>
      <p>This page is create dynamically at Build Time</p>
    </div>
  );
};
