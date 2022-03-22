const mongoose = require('mongoose');

const tourCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A category must have a name'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        select: false
    }

});

const TourCategory = mongoose.model('TourCategory' , tourCategorySchema);

module.exports = TourCategory;