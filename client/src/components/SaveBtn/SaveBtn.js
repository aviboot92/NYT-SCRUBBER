import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => {
  // console.log(props);
  return (
    <button className="save-btn" id = {props.id} onClick= {props.onSaveClick}>
      SAVE
    </button>
  );
}

export default SaveBtn;
