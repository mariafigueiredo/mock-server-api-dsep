const express = require('express');

const permissionController = require('../controllers/permissionController');
const userRoleController = require('../controllers/userRolesController');
const usersController = require('../controllers/usersController');


const router = express.Router();



router.route('/permissions').post(permissionController.createPermission);

/* USER ROLES*/

router.route('/user_roles').get(userRoleController.getUserRoles).post(userRoleController.createUserRole);
router
  .route('/user_roles/:user_role_id')
  .get(userRoleController.getUserRole)
  .patch(userRoleController.updateUserRole)
  .delete(userRoleController.deleteUserRole);
router
  .route('/user_roles/:user_role_id/disable')
  .post(userRoleController.disabledUserRole);

router
  .route('/user_roles/:user_role_id/enable')
  .post(userRoleController.enableUserRole);




/* USERS*/


router.route('/users').get(usersController.getUsers).post(usersController.createUser);
router
  .route('/users/:id')
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);
router
  .route('/users/:id/disable')
  .post(usersController.disabledUser);

router
  .route('/users/:id/enable')
  .post(usersController.enableUser);

router
  .route('/users/:id/invite')
  .post(usersController.inviteUser);

module.exports = router;