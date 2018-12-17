
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json({});
    });

    app.post('/api/friends', function(req, res){
        res.send(true);
    });

}