import React from "react";
import "./Results.css";
import SaveBtn from "../SaveBtn"

const Results = (props) => {
  const results = props.results;
  console.log(props.onSave);
  return(
          <div>
          <nav className="navbar navbar-dark bg-primary">
              <h3 class="text-white h3">
                Results
              </h3>   
          </nav>
          <ul className = "list-group">
            {results.map((res) => {
              return(
                <li key = {res._id}>
                  <a href={res.web_url}><b>{res.headline.main}</b></a>
                  <SaveBtn id = {res._id} onSaveClick = {props.onSave}></SaveBtn>
                </li>
              )
            })}
          </ul>
        </div>
        );
}

export default Results;
