import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <ul className="navbar">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/avengers">Avengers</Link>
    </li>
  </ul>
);

export default Navigation;
