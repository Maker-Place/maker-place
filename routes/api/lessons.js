const router = require("express").Router();
const Lessons = require("../../controllers/Lessons");
const fetch = require("../../controllers/Fetch")

// Matches with "/api/classes"
router.route("/")
  .get(fetch.scrapeClasses)
  .post(Lessons.create);

// Matches with "/api/lessons/categories/category"
router
  .route("/:category")
  .get(Lessons.findByCategory);
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
