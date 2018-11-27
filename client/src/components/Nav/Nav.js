import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-dark bg-dark">
  <table>
    <tr>
        <th>
          <a className="navbar-brand" href="/">
            <h1>NEW YORK TIMES ARTICLE SCRUBBER</h1> 
          </a>
        </th>
    </tr>
    <tr>
        <td>
          <h6>Search for and annotate articles of interest</h6>
        </td>
    </tr>
  </table>
    
  </nav>
);

export default Nav;
