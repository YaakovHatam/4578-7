mongoose = require('mongoose');
var Schema = mongoose.Schema;

const QuizSchema = new Schema({
    qTitle: String,
    questions: []
});

module.exports = mongoose.model('Quiz' , QuizSchema); 