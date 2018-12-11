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
    // console.log(id, url, headline);
    return axios.post("/api/articles/", {id,url,headline} );
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    // console.log(id);
    return axios.delete("/api/articles/"+id);
  },
  getSavedArticles: function(){
    return axios.get("/api/articles");
  },
  getTypeOfRequest: function(){
    axios.defaults.headers.common['Authorization'] = "dmthcnJhOlZhbkthazI3MDUh";
    return axios.get("https://stg.maximo.ucla.edu/maximo/oslc/os/ucmxclasshier/_MTMzOA--?lean=1&oslc.properties=classstructure{classstructureid,classificationid,description,descendent}")
    .then((resp) => {
      console.dir(resp);
  });
  }
};
