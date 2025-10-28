var express = require('express');
var app = express();
var appName = "dist"
app.use(express.static(appName))
app.get('/', function (req, res,next) {
 res.redirect('/') 
});
app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080")
