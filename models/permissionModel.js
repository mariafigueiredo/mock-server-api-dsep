const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  id: String,
  features: {
    type: Array,
    required: [true, 'Please provide feature name'],
  },
  resource: {
    type: String,
    required: [true, 'Please provide resource name'],
  },
  status: {
    type: String,
    default: 'enable'
  }
});

permissionSchema.pre('save', function (next) {
  this.id = this._id;
  next();
});


const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;