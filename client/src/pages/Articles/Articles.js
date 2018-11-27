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
    startYear:"",
    endYear:""
  };

  // componentDidMount() {
  //   this.loadArticles();
  // }

  loadArticles = (res) => {
    console.log(res)
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
    if (this.state.topic && this.state.startYear && this.state.endYear) {
      API.getArticles({
        topic:this.state.topic,
        startYear:this.state.startYear,
        endYear:this.state.endYear
      })
        .then(res => this.setState({searchArticles:res.data.response.docs}))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <Search 
                inputChange = {this.handleInputChange}
                topicValue = {this.state.topic}
                startYearValue = {this.state.startYear}
                endYearValue = {this.state.endYear}
                onSubmit = {this.handleFormSubmit}>
              </Search>
            </Jumbotron>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <Results></Results>
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
