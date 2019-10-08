const mongo = require('mongoose');

var userSchema = new mongo.Schema({
    userId: String,
    mailId: String,
    password: String,
    userName: String,
    level: String,
    xp: String,
    played: String,
    won: String,
    histroy: []
});

mongo.model('user', userSchema)