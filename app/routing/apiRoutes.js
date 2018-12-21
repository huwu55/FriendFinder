var friends = require('../data/friends.js');

function findFriend(user){
    var minDiff = 100000;
    var friendIndex = 0;
    var tempDiff = 0;

    for (var i = 0; i < friends.length; i++){
        for(var j = 0; j < 10; j++){
            tempDiff += Math.abs(user.answers[j] - friends[i].answers[j]);
        }

        if (tempDiff < minDiff){
            minDiff = tempDiff;
            friendIndex = i;
        }
        tempDiff = 0;
    }

    console.log(minDiff);

    return friends[friendIndex];
}

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        var userInfo = req.body;
        for (var i = 0; i < 10; i++)
            userInfo.answers[i] = parseInt(userInfo.answers[i]);
        var friend = findFriend(userInfo);

        friends.push(userInfo);

        res.send(friend);
    });

}