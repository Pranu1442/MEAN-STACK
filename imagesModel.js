const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImagesSchema = mongoose.Schema({
    filename: { type: String },
    path: { type: String },

});
module.exports = mongoose.model('Images', ImagesSchema);