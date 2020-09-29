const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const validator = require('validator');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password']
  },
  confirm_password:{
    type: String,
    required: [true, 'Please confirm the password'],
    validator: function(el) {
      return el === this.password;
    },
    message: 'Passwords are not the same!'
  },
  name:{
    type: String,
    required: [true, 'Please provide a name']
  },
  auth_token: {
    type: String
  },
  extra_params: {
    type: Object
  },
  user_role: {
      type: mongoose.Schema.ObjectId,
      ref: 'UserRoles',
      required: [true, 'Provide user role name']
  },
  confirmed_at:{
    type: Date,
    default: null
  },
  created_at:{
    type: Date,
    default: new Date()
  },
  disabled_at: {
    type: Date,
    default: null
  },
  invited_at: {
    type: Date,
    default: null
  },
  language: {
    type: String,
    default: 'en-en'
  },
  last_logged_in_at: {
    type: Date,
    default: null
  },
  registration_url: String,
  status: String,
  type: String,
  updated_at:{
    type: Date,
    default: null
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
}
);


userSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user_role',
    select: 'name permissions'
  });

  next();
});

userSchema.pre('save', function (next) {
  this.auth_token = signToken(this._id);
  next();
});


userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await candidatePassword === userPassword;
};




const User = mongoose.model('User', userSchema);

module.exports = User;