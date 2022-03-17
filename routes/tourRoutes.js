const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();
// 2) ROUTE HANDLERS

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id/:x?')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;