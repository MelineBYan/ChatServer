const MsgModel = require("../models/messages.model");
const RoomModel = require("../models/rooms.model");

class RoomController {

    //get room by Id
    static async getOne (req, res) {
        const info = await RoomModel
        .findOne({_id: req.params.id});
        return res.send(info);
    }

    // get all users of room
    static async getUsers (req, res) {
        console.log('all by room')
        const info = await RoomModel
        .find({roomName: req.params.roomName})
        .populate({path: 'users', select: 'name -_id'});
        return res.send(info);
    }


    //get rooms
    static async getAll (req, res) {
        console.log('all')
        const info = await RoomModel.find();
        res.send(info);
    }
}


module.exports = RoomController;