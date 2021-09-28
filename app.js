const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const authenticationRouter = require('./routes/authenticationRoutes');
const adminRouter = require('./routes/adminRoutes');
const disponibilityRouter = require('./routes/disponibilityRoutes');
const bytesIngestedRouter = require('./routes/bytesIngestedRoutes');


//const userRouter = require('./routes/userRoutes');

const app = express();
app.use(cors({origin: 'http://localhost'}));
app.options('*', cors());

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
app.use('/monitor/heartbeat*/_search', disponibilityRouter);
app.use('/monitor/filebeat*/_search', bytesIngestedRouter);



//ROUTE HANDLER; validator
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
})


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});




app.use(globalErrorHandler);

module.exports = app;