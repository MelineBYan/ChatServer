const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/rooms.controller')


router.get('/', function(req, res, next) {
  console.log('rooms');
  next();
});
router.get('/', RoomsController.getAll);
router.get('/:id', RoomsController.getOne);
router.get('/roomName', RoomsController.getUsers);



module.exports = router;
