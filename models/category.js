const mongoose = require('mongoose')

// define Category schema with the properties & data types we want
var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
})

// make this public as 'Category'
module.exports = mongoose.model('Category', categorySchema)