import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="header">
      <h2 className="title">
        <Link to="/" className="title">
          Gatsby Blog
        </Link>
      </h2>
      <h3 className="pages">
        <Link to="/blog" className="pages">
          Blog Post
        </Link>
      </h3>
    </div>
  );
};

export default Header;
