var mongoose = require('mongoose');
schema = mongoose.Schema;

var questionSchema = new schema ({
    question: String,
    answer: String,
    alternatives: [String],
    type: String
});


module.exports = mongoose.model('Question', questionSchema);