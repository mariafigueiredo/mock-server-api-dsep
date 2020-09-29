const User = require('../models/userModel');
const UserRoles = require('../models/userRolesModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createUser = catchAsync(async (req, res, next) => {
  const {
    email,
    password,
    name,
    user_role,
    extra_params
  } = req.body;

  if (!name || !email || !password || !user_role) {
    return next(new AppError('Please provide name, email, password and user role.', 400));
  }

  const role = await UserRoles.findOne({
    name: user_role
  })

  if (!role) return next(new AppError('Role name invalid. please insert a new one', 400));

  const doc = {
    email,
    password,
    name,
    user_role: role.id,
    extra_params
  }
  const newUser = await User.create(doc);

  // if everything ok, send new user created
  res.status(200).json({
    status: 'success',
    data: newUser
  });
});

exports.getUsers = catchAsync(async (req, res, next) => {

  const listUsers = await  User.find();

  res.status(200).json({
    status: 'success',
    results: listUsers.length,
    requestTime: req.requestTime,
    data: {
      listUsers
    },
  });

});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError('Please insert valid id.', 400));
  }
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return next(new AppError('No user found with that ID', 404))
  }
  res.status(200).json({
    status: 'success',
    data: {
      user
    },
  });
});

exports.deleteUser = catchAsync (async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(new AppError('No user found with that ID', 404))
  }
  res.status(200).json({
    status: 'success',
    message: `User with ${req.params.id} deleted`,
  });
});


exports.disabledUser = catchAsync (async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError('Please insert valid id.', 400));
  }

});
exports.enableUser = catchAsync (async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError('Please insert valid id.', 400));
  }
});
exports.inviteUser = catchAsync (async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError('Please insert valid id.', 400));
  }
});




