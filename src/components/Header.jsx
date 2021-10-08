import React from "react";
import { Link } from "react-router-dom"
function Header() {

  return (
    <div className="nav">
      <div className="nav-item"><span className="nav-logo"><Link to="/">Logo</Link></span></div>
      <div className="nav-item"><Link to="/hello">Hello</Link></div>
      <div className="nav-item"><Link to="/adopt">Why Adopt</Link></div>
      <div className="nav-item"><Link to="/about">About Us</Link></div>
   </div>
  );
}

export default Header
