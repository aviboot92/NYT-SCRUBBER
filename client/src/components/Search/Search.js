import React from "react";
import "./Search.css";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Search = (props) => (
  <div>
      <nav className="navbar navbar-dark bg-primary">
          <h3 class="text-white h3">
            Search
          </h3>   
      </nav>
      <form>
              <Input
                value={props.topicValue}
                onChange={props.inputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={props.startYearValue}
                onChange={props.inputChange}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                value={props.endYearValue}
                onChange={props.inputChange}
                name="endYear"
                placeholder="End Year (required)"
              />
              <FormBtn
                disabled={!(props.topicValue && props.startYearValue && props.endYearValue)}
                onClick={props.onSubmit}
              >
                Search Articles..!
              </FormBtn>
            </form>
  </div>
);

export default Search;
