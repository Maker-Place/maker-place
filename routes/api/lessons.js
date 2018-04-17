const router = require("express").Router();
const Lessons = require("../../controllers/Lessons");
const fetch = require("../../controllers/Fetch")

// Matches with "/api/lessons"
router.route("/")
  .get(fetch.scrapeClasses)

// Matches with "/api/lessons/category"
router.route("/categories")
  .get(Lessons.findAllCategories);
router
  .route("/:category")
  .get(Lessons.findByCategory);
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
