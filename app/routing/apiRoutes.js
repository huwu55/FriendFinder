//var friends = require('../data/friends.js');
var mysql = require('mysql');
require("dotenv").config();

var mysql_pw = process.env.MYSQL;

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: mysql_pw,
    database: "friends_db"
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

function findFriend(user, friends){
    var minDiff = 100000;
    var friendIndex = 0;
    var tempDiff = 0;

    for (var i = 0; i < friends.length; i++){
        //console.log(friends[i].name);
        for(var j = 1; j < 11; j++){
            //tempDiff += Math.abs(user.answers[j] - friends[i].answers[j]);
            tempDiff += Math.abs(user.answers[j-1] - friends[i]["answer_" + j]);
            //console.log(typeof friends[i]["answer_" + j]);
        }

        if (tempDiff < minDiff){
            minDiff = tempDiff;
            friendIndex = i;
        }
        tempDiff = 0;
    }

    console.log(minDiff);

    var friend = {};
    friend.name = friends[friendIndex].name;
    friend.photoLink = friends[friendIndex].photo_link;
    friend.answers = [];
    for (i = 0; i < 10; i++){
        friend.answers[i] = friends[friendIndex]["answer_" + (i+1)];
    }

    return friend;
}

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        //res.json(friends);
        connection.query("SELECT * FROM friends", function(error, results, fields){
            if (error) return console.log(error);

            res.json(results);
        });
    });

    app.post('/api/friends', function(req, res){
        // var userInfo = req.body;
        // for (var i = 0; i < 10; i++)
        //     userInfo.answers[i] = parseInt(userInfo.answers[i]);
        // var friend = findFriend(userInfo);

        // friends.push(userInfo);

        // res.send(friend);

        var userInfo = req.body;

        connection.query("SELECT * FROM friends", function(error, results, fields){
            if (error) return console.log(error);

            //res.json(results);
            for (var i = 0; i < 10; i++)
                userInfo.answers[i] = parseInt(userInfo.answers[i]);
            var friend = findFriend(userInfo, results);

            res.send(friend);
            connection.query("INSERT INTO friends (name, photo_link, answer_1, answer_2, answer_3, answer_4, answer_5, answer_6, answer_7, answer_8, answer_9, answer_10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [userInfo.name, userInfo.photoLink, userInfo.answers[0], userInfo.answers[1], userInfo.answers[2], userInfo.answers[3], userInfo.answers[4], userInfo.answers[5], userInfo.answers[6], userInfo.answers[7], userInfo.answers[8], userInfo.answers[9]], function(error, results, fields){
                if (error) return console.log(error);
            });
        });
    });

}