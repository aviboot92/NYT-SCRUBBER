import React from "react";
import "./Results.css";
import Btn from "../Btn";

const Results = (props) => {
  const results = props.results;
  // console.log(props.saveArticles);
  return(
          <div>
          <nav className="navbar navbar-dark bg-primary">
              <h3 class="text-white h3">
                Results
              </h3>   
          </nav>
          <form>
              <ul className = "list-group">
                {results.map((res) => {
                  return(  
                    <li key = {res._id}>
                      <a href={res.web_url}><b>{res.headline.main}</b></a>
                      <Btn id = {res._id} onClick = {props.onSave}>SAVE</Btn>
                    </li>
                  )
                })}
              </ul>

          </form>
        </div>
        );
}

export default Results;
