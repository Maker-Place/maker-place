const router = require("express").Router();
const classesController = require("../../controllers/classesController");

// Matches with "/api/classes"
router.route("/")
  .get(classesController.findAll)
  .post(classesController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
