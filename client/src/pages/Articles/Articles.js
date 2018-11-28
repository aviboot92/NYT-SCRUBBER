import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import "./Articles.css";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Saved from "../../components/Saved";

class Articles extends Component {
  state = {
    searchArticles: [],
    topic:"",
    startDate:"",
    endDate:""
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startDate && this.state.endDate) {
      API.getArticles({
       q: this.state.topic,
      start_year:this.state.startDate,
      end_year:  this.state.endDate
       
      })
        .then(res => {
         return this.setState({searchArticles:res.data.response.docs});})
        .catch(err => console.log(err));
    }
  };

  handleSaveBtn = (event) =>{
    console.log(event.target);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <Search 
                inputChange = {this.handleInputChange}
                topicValue = {this.state.topic}
                startDateValue = {this.state.startDate}
                endDateValue = {this.state.endDate}
                onSubmit = {this.handleFormSubmit}>
              </Search>
            </Jumbotron>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <Results onSave = {this.handleSaveBtn} results = {this.state.searchArticles}></Results>
            </Jumbotron>
          </Col>
          <Col size="md-12 sm-12">
          <Jumbotron>
            <Saved></Saved>
          </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
