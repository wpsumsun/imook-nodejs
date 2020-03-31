var createError = require('http-errors'); // error
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // cookie  req.cookie
var logger = require('morgan'); // 日志

var blogRouter = require('./routes/blog');
var userRouter = require('./routes/user');

var app = express(); // 本次客户端请求的一个实例   一次请求

app.use(logger('dev'));
app.use(express.json()); // getPostData 从而可以从req.body中获取post的相关数据
app.use(express.urlencoded({ extended: false })); // 兼容其他格式
app.use(cookieParser());

app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
