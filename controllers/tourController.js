const fs = require('fs');
const Tour = require('../models/tourModel')


// exports.checkBodyMiddleware = (req, res, next) => {
//     console.log(req.body)
//     if(!req.body.name && !req.body.price){
//         return res.status(400).json({status: 'fail', message: 'Bad request'});
//     }
//     next();
// }

exports.getAllTours = async (req, res) => {
    try {
        // BUILD A QUERY
        // 1A) Filtering
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el]);

        // 1B) Advanced filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match =>`$${match}`);

        // const tours = await Tour.find();
        let query = Tour.find(JSON.parse(queryStr));
        // 2) Sorting
        if(req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
           query = query.sort(sortBy);
           // sort('price ratingsAverage')
        }else{
            query = query.sort('-createdAt');
        }

        // 3) Field limiting
        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        }else{
            query = query.select('-__v');
        }



        // 4) Pagination

        query = query.skip(2).limit(10)
        
        // EXECUTE A QUERY
        const tours = await query;

        // const query = Tour.find()
        //     .where('duration').equals(5)
        //     .where('difficulty').equals('easy');

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            error: err.message
        })
    }

};
exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        // Tour.findOne({_id: req.params.id})
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            error: err
        })
    }
    //const id = +req.params.id;
    // const tour = tours.find(el => el.id === +req.params.id);
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour
    //     }
    // });
};
exports.createTour = async (req, res) => {
    try {
        // const newTour = new Tour({})
        // newTour.save()
        const newTour = await Tour.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

    // const newId = tours[tours.length - 1].id + 1;
    // const newTour = Object.assign({id: newId}, req.body);
    // tours.push(newTour);
    // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,
    //     JSON.stringify(tours), err => {
    //         res.status(201).json({
    //             status: 'success',
    //             data: {
    //                 tour: newTour
    //             }
    //         });
    //     });
};
exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            });
        res.status(200).json({
            status: 'success',
            data: {
                // tour: tour
                // ||
                tour
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            error: err
        })
    }
};
exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            error: err
        });
    }
};