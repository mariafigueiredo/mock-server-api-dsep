const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const authenticationRouter = require('./routes/authenticationRoutes');
const adminRouter = require('./routes/adminRoutes');
const disponibilityRouter = require('./routes/disponibilityRoutes');
const bytesIngestedRouter = require('./routes/bytesIngestedRoutes');


//const userRouter = require('./routes/userRoutes');

const app = express();

/* MIDDLEWARES */
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/*ROUTERS*/
app.use('/api/login', authenticationRouter);
app.use('/api/admin', adminRouter);
app.use(`/heartbeat*/_search`, disponibilityRouter);
app.use(`/filebeat*/_search`, bytesIngestedRouter);


//ROUTE HANDLER; validator
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
})

app.use(globalErrorHandler);

module.exports = app;