const express = require("express");
const router = express.Router();
const PostController = require("../controllers/TodoController");

router.get("/items", PostController.index);
router.patch("/update/:itemId", PostController.updateItem);
router.post("/item", PostController.store);
router.post("/delete/:itemId", PostController.deleteItem);

module.exports = router;
