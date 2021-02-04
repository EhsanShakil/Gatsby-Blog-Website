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
      <div className="nav">
        <h3 className="pages">
          <Link to="/" className="pages">
            Home
          </Link>
        </h3>
        <h3 className="pages">
          <Link to="/blog" className="pages">
            Blog Post
          </Link>
        </h3>
        <h3 className="pages">
          <Link to="/about" className="pages">
            About
          </Link>
        </h3>
        <h3 className="pages">
          <Link to="/privacy" className="pages">
            Privacy Policy
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
