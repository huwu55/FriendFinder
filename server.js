var express = require('express');

var app = express();

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(3000, function() {
    console.log("Server started on port", 3000);
});