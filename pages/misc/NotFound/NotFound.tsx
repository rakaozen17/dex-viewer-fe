import React from "react";
import './NotFound.css'
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="nf" style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you requested could not be found.</p>
        <Link to='/'><button className="go-back-btn">Go Back</button></Link>
      </div>
    </div>

  );
};

export default NotFoundPage;
