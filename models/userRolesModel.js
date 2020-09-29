const mongoose = require('mongoose');
const Permission = require('./permissionModel');

const userRolesSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: [true, 'Please provide a role name'],
    unique: true,
  },
  permissions: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Permission',
  }]
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  },
});

// roleSchema.pre('save', async function (next) {
//   console.log('permissions', this.permissions)
//   const permissionsPromises = this.permissions.map(async (id) =>{
//     console.log('id  >>>>> ', id)
//     await Permission.findById(id)
//   } );
//   this.permissions = await Promise.all(permissionsPromises);
//   next();
// });


// roleSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'permissions',
//     select: 'id features status'
//   });
//   next();
// });

userRolesSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'permissions',
    select: 'features resource status'
  })
  next();
});

userRolesSchema.pre('save', function (next) {
  this.id = this._id;
  next();
});

const UserRoles = mongoose.model('UserRoles', userRolesSchema);

module.exports = UserRoles;