var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;
var server = app.listen(PORT, function () { });
var router = require('./router');

//Home Router
app.use('/',router.route(express));
app.use('/', express.static(__dirname + '/html'));

console.log("server started on port:"+PORT);
