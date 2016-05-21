var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var url = 'mongodb://localhost:27017/test';

mongoose.connect(url);
mongoose.set('debug', true);

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

require('./app/routes/api')(app);

app.listen(3008);