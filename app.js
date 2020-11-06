 const express = require('express');
 const path = require('path');
 const cookieParser = require('cookie-parser');
 const createError = require('http-errors');

 const app = express();

 const userRouter = require('./router/users');

 let conf = {
     port: 8088,
     host: 'localhost'
 };



 app.use(express.static(path.join(__dirname, 'public')));

 app.use(express.json()) // for parsing application/json
 app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded 

 app.use(cookieParser()); //读取和设置cookie 的 中间件

 app.use('/users', userRouter);



 //自定义一个错误中间件

 app.use(function(req, res, next) {
     // 中间件
     next(createError(404)); // 创建一个404错误
 });

 app.use(function(err, req, res, next) {
     //console.log(err.status);
     res.status(err.status || 500);
     res.location('/public/html/404.html');
 });

 app.listen(conf.port, conf.host, () => {
     console.log(`server is running on http://${conf.host}:${conf.port}`);
 })