import React, { Component } from "react";
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
    savedArticles:[],
    saveActive: false,
    topic:"",
    startDate:"",
    endDate:""
  };

  componentDidMount() {
    this.getSaveArticles();
    this.getUserAuth();
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

  getSaveArticles = () => {
    API.getSavedArticles()
      .then(res => {
        // console.log(res.data);
        const data = res.data;
        this.setState({savedArticles: data})
      })
      .catch(err => console.log(err));
  };

  handleSaveBtn = (event) =>{
    // console.log(event.target.id);
    event.preventDefault();
    const article = this.state.searchArticles.map((article) => {
     if(article._id === event.target.id){
      // console.log(article);
      API.saveArticles({
        id: article._id,
        url: article.web_url,
        headline: article.headline.main
      }).then(res => {
        console.log("I am response"+res)
      })
        .catch(err => console.log(err.response));
      } 
    });
    this.getSaveArticles();
  };

  handleDelBtn = (event) => {
    event.preventDefault();
    // console.log(event.target.id);
    const id = event.target.id;
    this.delArticle(id);
  }

  delArticle = (id) => {
    API.deleteArticle(id)
      .then(res =>{
        console.log(res);
        this.getSaveArticles();
      })
      .catch(err => console.log(err));
  };

  getUserAuth = ()=> {
    API.getUsersAuth()
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
                startDateValue = {this.state.startDate}
                endDateValue = {this.state.endDate}
                onSubmit = {this.handleFormSubmit}>
              </Search>
            </Jumbotron>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <Results onSave = {this.handleSaveBtn}  results = {this.state.searchArticles}></Results>
            </Jumbotron>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <Saved onDel = {this.handleDelBtn} savedArticles = {this.state.savedArticles}></Saved>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
