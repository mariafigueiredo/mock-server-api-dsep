const Permission = require('../models/permissionModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.createPermission = catchAsync(async (req, res, next) => {
  const {
    features,
    resource,
    status
  } = req.body;

  // 1) check if email and password exist
  if (!features || !resource || !status) {
    return next(new AppError('Please provide features, resource and status', 400));
  }

  const doc = {
    features,
    resource,
    status
  }
  const result = await Permission.create(doc);

  // 3) if everything ok, send token to client
  //const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    data: result
  });
});