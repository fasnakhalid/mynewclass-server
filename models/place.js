//import mongoose
//use crud methods

const mongoose = require('mongoose')

var placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    location: {
        type: String,
        required: 'Location is required'
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: 'Category is required'

    }
})

//make this public as 'Place'
module.exports = mongoose.model('Place', placeSchema)