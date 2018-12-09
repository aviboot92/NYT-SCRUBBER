import React from "react";
import "./Saved.css";
import Btn from "../Btn";

const Saved = (props) => {
const savArticles = props.savedArticles;
// console.log(props);
return(
  <div>
      <nav className="navbar navbar-dark bg-primary">
          <h3 class="text-white h3">
            Saved Articles
          </h3>   
      </nav>
      <form>
              <ul className = "list-group">
                {savArticles.map((res) => {
                  return(  
                    <li key = {res.articleId}>
                      <a href={"res.url"}><b>{res.headline}</b></a>
                      <Btn id = {res._id} onClick = {props.onDel}>REMOVE</Btn>
                    </li>
                  )
                })}
              </ul>

          </form>
  </div>
);
};

export default Saved;
