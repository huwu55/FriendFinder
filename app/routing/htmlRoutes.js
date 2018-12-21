var path = require('path');
// var friends = require('../data/friends.js');

module.exports = function(app){

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // app.get('/info-get', function(req, res){
    //     //res.json(req.query);
    //     res.redirect('/survey');
    // });

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

}