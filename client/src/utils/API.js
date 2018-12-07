import axios from "axios";

export default {
  // Gets all Articles
  getArticles: function({q,start_year,end_year}) {
   
    const params = Object.assign(
      { api_key: "6d3df2efb05a47d2854ec1c6d83a36e1" },
      {q,start_year,end_year}
    );
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params
    });
  },
  // Save Articles which are opted for Save
  saveArticles: function({id, url, headline} = {}) {
    console.log(id, url, headline);
    return axios.post("/api/articles/", {id,url,headline} );
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
