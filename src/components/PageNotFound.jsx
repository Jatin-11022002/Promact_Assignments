import React from "react";
import { Link } from "react-router-dom";
import '../styling/notfoundpage.css'

const PageNotFound = () => {
    return (
        <div className="wrapper">

        <div className="not-found-container">
          <h2 className="not-found-header">404 - Page Not Found</h2>
          <p className="not-found-message">The page you are looking for does not exist.</p>
          <Link to="/" className="back-to-home-link">Go back to Home Page</Link>
        </div>
        </div>
      );
};

export default PageNotFound;
