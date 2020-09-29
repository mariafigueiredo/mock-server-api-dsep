const Role = require('../models/userRolesModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createUserRole = catchAsync(async (req, res, next) => {
  const {
    name,
    permissions
  } = req.body;

  // 1) check if email and password exist
  if (!name || !permissions ) {
    return next(new AppError('Please provide name and permissions', 400));
  }

  const doc = {
    name,
    permissions
  }
  const result = await Role.create(doc);

  // 3) if everything ok, send token to client
  //const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    data: result
  });
});


exports.getUserRoles = catchAsync(async (req, res, next) => {

  const listUserRoles = await  Role.find();

  res.status(200).json({
    status: 'success',
    results: listUsers.length,
    requestTime: req.requestTime,
    data: {
      listUserRoles
    },
  });

});

exports.getUserRole = catchAsync(async (req, res, next) => {
  const userRole = await Role.findById(req.params.id);
  if (!userRole) {
    return next(new AppError('Please insert valid id.', 400));
  }
  res.status(200).json({
    status: 'success',
    data: {
      userRole
    }
  });
});

exports.updateUserRole = catchAsync(async (req, res, next) => {
  const userRole = await Role.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return next(new AppError(`No user_role found with ${req.params.id} ID`, 404))
  }
  res.status(200).json({
    status: 'success',
    data: {
      userRole
    },
  });
});

exports.deleteUserRole = catchAsync (async (req, res, next) => {
  const userRole = await Role.findByIdAndDelete(req.params.id);
  if (!userRole) {
    return next(new AppError('No user found with that ID', 404))
  }
  res.status(200).json({
    status: 'success',
    message: `User with ${req.params.id} deleted`,
  });
});


exports.disabledUserRole = catchAsync (async (req, res, next) => {
  const userRole = await Role.findById(req.params.id);
  if (!userRole) {
    return next(new AppError('Please insert valid id.', 400));
  }
});

exports.enableUserRole = catchAsync (async (req, res, next) => {
  const userRole = await Role.findById(req.params.id);
  if (!userRole) {
    return next(new AppError('Please insert valid id.', 400));
  }

});