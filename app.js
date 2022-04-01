const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const tablesRouter = require('./routes/tables');
const billingRouter = require('./routes/billing');
const notificationsRouter = require('./routes/notifications');
const profileRouter = require('./routes/profile');
const signinRouter = require('./routes/sign-in');
const signupRouter = require('./routes/sign-up');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tables', tablesRouter);
app.use('/billing', billingRouter);
app.use('/notifications', notificationsRouter);
app.use('/profile', profileRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);



module.exports = app;
