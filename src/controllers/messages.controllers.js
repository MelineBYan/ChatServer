const MsgModel = require("../models/messages.model");
const RoomModel = require("../models/rooms.model");

class MsgsController {

    //get message by Id
    static async getOne (req, res) {
        const info = await MsgModel.findOne({senderId: req.params.id});
        return info;
    }
   
    //get messages by room Id room/msgs
    static async getAllMsgsByRoomId (req, res) {
        const info = await MsgModel
        .find({roomId: req.params.id})
        .sort({created: 1});
        return info;
    }

    //create msg
    static async create (req, res) {
        const info = await MsgModel.create(req.body);
        return info;
    }

    //update msg by Id
    static async update (req, res) {
        const info = await MsgModel.findByIdAndUpdate(req.params.id, req.body);
        return info;
    }

    //remove msg by Id
    static async remove (req, res) {
        const info = await MsgModel.findByIdAndRemove(req.params.id);
        return info;
    }


}