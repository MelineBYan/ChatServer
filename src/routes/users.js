const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller')


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/', UsersController.getAll);
router.post('/', UsersController.create);
router.get('/:id', UsersController.getOne);
router.get('/:roomId', UsersController.getAllUsersByRoomId);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.remove);


module.exports = router;
