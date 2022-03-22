const express = require("express");
const tourCategoryController = require("../controllers/tourCategoryController");

const router = express.Router();
// 2) ROUTE HANDLERS

router
    .route('/')
    .get(tourCategoryController.getAllCategories)
    .post(tourCategoryController.createCategory);

router
    .route('/:id/:x?')
    .get(tourCategoryController.getCategory)


module.exports = router;