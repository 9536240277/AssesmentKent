// // // var express    = require("express");
// // //  var mysql      = require('mysql');
// // //  var connection = mysql.createConnection({
// // //    host     : 'localhost',
// // //    user     : 'root',
// // //    password : 'password',
// // //    database : 'kent'
// // //  });
// // //  var app = express();
 
// // //  connection.connect(function(err){
// // //  if(!err) {
// // //      console.log("Database is connected ... \n\n");  
// // //  } else {
// // //      console.log("Error connecting database ... \n\n",err);  
// // //  }
// // //  });
// // // //app.listen(3000);

// // var express    = require("express");
// // var login = require('./routes/loginroutes');
// // var bodyParser = require('body-parser');
// // var app = express();
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // app.use(function(req, res, next) {
// //     res.header("Access-Control-Allow-Origin", "*");
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //     next();
// // });
// // var router = express.Router();
// // // test route
// // router.get('/', function(req, res) {
// //     res.json({ message: 'welcome to our upload module apis' });
// // });
// // //route to handle user registration
// // router.post('/register',login.register);
// // router.post('/login',login.login)
// // app.use('/api', router);
// // app.listen(4000);


// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const indexRouter = require('./router.js');
 
// const app = express();
 
// app.use(express.json());
 
// app.use(bodyParser.json());
 
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
 
// app.use(cors());
 
// app.use('/api', indexRouter);
 
// // Handling Errors
// app.use((err, req, res, next) => {
//     // console.log(err);
//     err.statusCode = err.statusCode || 500;
//     err.message = err.message || "Internal Server Error";
//     res.status(err.statusCode).json({
//       message: err.message,
//     });
// });
 
// app.listen(3000,() => console.log('Server is running on port 3000'));
