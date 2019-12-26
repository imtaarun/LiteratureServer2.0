var express = require('express');
var mongo = require('mongoose');
require('../persistence/db');
var UserModel = mongo.model('user');

function addUser(userId, mailId, password, userName) {
    var user = new UserModel();
    user.userId = userId;
    user.mailId = mailId
    user.password = password
    user.userName = userName
    user.level = 0;
    user.xp = 0.
    user.played = 0.
    user.won = 0.

    user.save((err, doc) => {
        if (!err) {
            console.log('User Creation Success');
        }
        else {
            console.log('User Creation Error')
            console.log(err);
        }
    });
}

function updateUser(userIdParam, mailId, password, userName, level, xp, played, won) {
    var user = new UserModel();
    if (userIdParam != null) {
        user.userId = userIdParam;
    }
    if (mailId != null) {
        user.mailId = mailId
    }
    if (password != null) {
        user.password = password
    }
    if (userName != null) {
        user.userName = userName
    }
    user.level = level;
    user.xp = xp;
    user.played = played;
    user.won = won;

    var myquery = { userId: userIdParam };
    var newvalues = { $set: user};

    user.updateOne(myquery, newvalues, (err, doc) => {
        if (!err) {
            console.log('User Updation Success');
        }
        else {
            console.log('User Updation Error')
            console.log(err);
        }
    });
}

function getUser(userIdParam) {
    var user = new UserModel();
    var myquery = { userId: userIdParam };

    user.find(myquery, (err, doc) => {
        if (!err) {
            console.log("User get success");
            return doc;
        }
        else {
            console.log('User get Error')
            console.log(err);
        }
    });
}

function loginUser(userIdParam, passwordParam) {
    var user = new UserModel();
    var myquery = { userId: userIdParam };

    user.find(myquery, (err, doc) => {
        if (!err) {
            console.log("User get success");
            if(doc.password == passwordParam){
                return true;
            }
        }
        else {
            console.log('User get Error')
            console.log(err);
            return false;
        }
    });
}

module.exports={
    addUser : randomDistribution,
    updateUser : updateUser,
    getUser : getUser,
    loginUser : loginUser
}
