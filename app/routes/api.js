module.exports = function(app) {
    var mongoose = require('mongoose');
    var Question = require('../models/question');


    app.get('/questions', function(req, res){

        Question.find(function(err, questions) {
            res.send(questions);
        });
    });


    app.get('/questions/:question_id', function(req, res, next) {
        Question.findById(req.params.question_id, function(err, question) {
            if (err) res.send(err);
            
            res.json(question);
        });
    });


}
