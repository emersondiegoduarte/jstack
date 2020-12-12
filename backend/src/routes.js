const express = require('express');

const router = express.Router();
const ContactController = require("./app/Controller/ContactController")

router.get("/contact", ContactController.index);
router.get("/contact/:id", ContactController.show);


module.exports = router;
