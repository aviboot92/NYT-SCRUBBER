import axios from "axios";

export default {
  // Gets all Articles
  getArticles: function(req) {
    console.log(req);
      const apiKey = "9b3adf57854f4a19b7b5782cdd6e427a";
      const startD = req.startDate;
      const endD = req.endDate;
      const q = req.topic;

    let queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl+= '?';
    console.log(queryUrl);
    return axios.get(queryUrl+apiKey+q+startD+endD)
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
