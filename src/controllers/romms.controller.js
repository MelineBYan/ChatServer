const MsgModel = require("../models/messages.model");
const RoomModel = require("../models/rooms.model");

class RoomController {

    //get room by Id
    static async getOne (req, res) {
        const info = await RoomModel
        .findOne({roomId: req.params.id});
        return info;
    }
   
    //get messages by room Id room/msgs
    static async getAllMsgsByRoomId (req, res) {
        const info = await MsgModel
        .find({roomId: req.params.id})
        .sort({created: 1});
        return info;
    }

    //get users by room Id  room/users
    static async getAllUsersByRoomId (req, res) {
        const info = await MsgModel.find({roomId: req.params.id});
        return info;
    }


}