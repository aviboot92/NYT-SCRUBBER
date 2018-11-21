import axios from "axios";

export default {
  // Gets all Articles
  getArticles: function(req, res) {
    const params = Object.assign(
      { api_key: "9b3adf57854f4a19b7b5782cdd6e427a" },
      req
    );
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params
    }).then(articles => res.json(articles));
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
