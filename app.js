const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const msgsRouter = require('./src/routes/index');
const roomsRouter = require('./src/routes/users');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/messages', msgsRouter);
app.use('/rooms', roomsRouter);



module.exports = app;
