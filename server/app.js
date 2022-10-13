const createError = require('http-errors');
const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require("mongoose");
const cors = require("cors");

//routes
const authRouter=require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bookRouter=require('./routes/books');

//Custom Middlewares.
const appLog=require("./middlewares/customAppLog");
const { VerifyToken } = require('./middlewares/JWT');
const app = express();
dotenv.config();

//connecting to db.
mongoose.connect(
  process.env.MONGO_URL
).then(()=>console.log("DB connecion successful")
).catch((e)=>console.log(e));

app.use(cors());

app.use(logger('dev'));//Morgan Logger.
//Custom App Logger middleware.
app.use(appLog);//Middleware for whole app

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/auth',authRouter);
app.use('/home',indexRouter);//open path
app.use('/users',VerifyToken,usersRouter);//jwt authrized path
app.use('/books',bookRouter);



// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
