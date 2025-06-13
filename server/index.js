var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog-cms', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('Mongodb connection successful'))
  .catch((err) => console.error(err));
var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
//Middleware for CORS
app.use(cors());
//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var passport = require('passport');
var auth = require('./routes/auth');
var category = require('./routes/category');
var post = require('./routes/post');

app.use(passport.initialize());
app.use('/api/auth', auth);
app.use('/api/category', category);
app.use('/api/post', post);

app.listen(3000,(err,res)=>{
    console.log(`Server Started on Port 3000`)
});