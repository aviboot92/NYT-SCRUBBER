import axios from "axios";

export default {
  // Gets all Articles
  getArticles: function(req, res) {
   
    const params = Object.assign(
      { api_key: "6d3df2efb05a47d2854ec1c6d83a36e1" },
      req.query
    );
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params
    });
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
