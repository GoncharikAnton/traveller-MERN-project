const Category = require('../models/tourCategoryModel')

exports.getAllCategories = async (req, res) => {
    try {
        // BUILD A QUERY
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match =>`$${match}`);
        let query = Category.find(JSON.parse(queryStr));


        // EXECUTE A QUERY
        const categories = await query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: categories.length,
            data: {
                categories
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            error: err.message
        })
    }

};

exports.createCategory = async (req, res) => {
    try {
        console.log(req.body)
        const newCategory = await Category.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                category: newCategory
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

};

