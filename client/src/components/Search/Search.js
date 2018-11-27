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
                value={props.startDateValue}
                onChange={props.inputChange}
                name="startDate"
                placeholder="YYYYMMDD (required)"
              />
              <Input
                value={props.endDateValue}
                onChange={props.inputChange}
                name="endDate"
                placeholder="YYYYMMDD (required)"
              />
              <FormBtn
                disabled={!(props.topicValue && props.startDateValue && props.endDateValue)}
                onClick={props.onSubmit}
              >
                Search Articles..!
              </FormBtn>
            </form>
  </div>
);

export default Search;
