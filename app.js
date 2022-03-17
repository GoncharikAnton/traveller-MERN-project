const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const tourRouter = require('./routes/tourRoutes')

const app = express();

const PORT = config.get('PORT') || 5000;


// 1) MIDDLEWARES

app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime)
    next();
})

// 3)ROUTS
// app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);


module.exports = app;