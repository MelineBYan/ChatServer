const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller')


// router.get('/', function(req, res, next) {
//   console.log('users');
//   // next();
// });
router.get('/', UsersController.getAll);
router.post('/', UsersController.create);
router.get('/:id', UsersController.getOne);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.remove);


module.exports = router;
