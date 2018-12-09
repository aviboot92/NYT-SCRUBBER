const router = require("express").Router();
const articleController = require("../../controllers/articlesController");

// Matches with "/api/articles/"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .delete(articleController.remove);

module.exports = router;
