// imports
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors()); // CORS 

var http = require('http').Server(app);
var io = require('socket.io')(http); // sockit init

require('./persistence/db');
var mongo = require('mongoose');

var game = mongo.model('game');
var user = mongo.model('user');

console.log("server started");

var bodyParser = require('body-parser') // Body Parser init
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//Listener
http.listen(8080, () => {
    console.log('started on port 8080');
});