const mongoose = require('mongoose');
// var ObjectId = mongoose.Schema.Types.ObjectId;

var historySchema = new mongoose.Schema({
    date: Date,
    list: Array,
    name: String,
    userId: String 
});

var History = mongoose.model('History', historySchema);

module.exports = History;


