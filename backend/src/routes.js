const express = require('express');

const router = express.Router();
const ContactController = require("./app/Controller/ContactController");
const CategoryController = require("./app/Controller/CategoryController");

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);
router.get("/category", CategoryController.index);
router.post("/category", CategoryController.store);
module.exports = router;
