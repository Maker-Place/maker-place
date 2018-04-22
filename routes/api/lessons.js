const router = require("express").Router();
const Lessons = require("../../controllers/Lessons");


// Matches with "/api/lessons/category"
router.route("/categories")
  .get(Lessons.findAllCategories);
router
  .route("/:category")
  .get(Lessons.findByCategory);
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
