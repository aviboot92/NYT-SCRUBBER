import React from "react";
import "./Btn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => {
  // console.log(props);
  return (
    <button className="li-btn" id = {props.id} onClick= {props.onClick}>
      {props.children}
    </button>
  );
}

export default SaveBtn;
