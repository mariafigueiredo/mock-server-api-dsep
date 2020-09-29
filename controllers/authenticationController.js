const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.login = catchAsync(async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide an email and password', 400));
  }

   const user = await User.findOne({
     email
   });

   if (!user || !(await user.correctPassword(password, user.password)) ) { //to validate id password is correct and if email 
     return next(new AppError('Incorrect email or password', 401));
   }

   res.status(200).json({
     status: 'success',
     data: user,
   });
});