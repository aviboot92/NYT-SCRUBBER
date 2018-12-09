const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log(req);
    db.Article
      .find()
      .sort({ date: -1 })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  create: function(req,res){
    // console.log(req.body);
    const body = req.body;
    const article = {
      articleId : body.id,
      url:body.url,
      headline:body.headline
    }
    // console.log(article);
    db.Article
      .create(article)
      .then((dbArticle) =>{
        // console.log(dbArticle);
        res.json(dbArticle);
      })
      .catch(err => res.status(422).json(err));
  }
};
