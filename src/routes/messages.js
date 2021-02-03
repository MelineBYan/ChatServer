const express = require('express');
const router = express.Router();
const MsgsController = require('../controllers/messages.controller.js')


router.get('/', function(req, res, next) {
  
  console.log('msgs')
next()
});
router.get('/', MsgsController.getAll);
router.post('/', MsgsController.create);
router.get('/:id', MsgsController.getOne);
router.get('/:roomId', MsgsController.getAllByRoomId);
router.put('/:id', MsgsController.update);
router.delete('/:id', MsgsController.remove);


module.exports = router;
