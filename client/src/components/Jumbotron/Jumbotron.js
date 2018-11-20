import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: "auto", clear: "both", paddingTop: 20, textAlign: "center", marginTop:20 }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
