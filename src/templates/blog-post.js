import React from "react";

export default ({ pageContext }) => {
  return (
    <div>
      <div>{pageContext.data.title}</div>
    </div>
  );
};
