const express = require("express");
const router = express.Router();

// CONTROLLER
const mailer_controller = require('../../controllers/mailer_controller')

// POST ROUTE
router.post("/", mailer_controller.standardMail)

// POST ROUTE
router.post("/review", mailer_controller.routeToReview)

module.exports = router;