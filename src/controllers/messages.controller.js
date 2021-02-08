const MsgModel = require("../models/messages.model");
const RoomModel = require("../models/rooms.model");
const { ObjectId } = require('mongoose');

module.exports = class MsgsController {

    //get message by Id
    static async getOne (req, res) {
        const info = await MsgModel
        .findOne({_id: req.params.id});
        return res.send(info);
    }
   
    //get msgs 
    static async getAll (req, res) {
        const info = await MsgModel
        .find()
        .sort({created: -1})
        .populate({path: 'senderId', select: 'name -_id'});
        return res.send(info);
    }

    //get messages by room Id
    static async getAllByRoomName (req, res) {
        const info = await MsgModel
        .find({roomName: req.params.roomName})
        .sort({created: -1})
        .limit(50)
        .populate({path: 'senderId', select: 'name -_id'});
        return res.send(info);
    }

    //create msg
    static async create (req, res) {
        const data = req.body;
        const newMsg = {
            senderId: data.userId,
            to:data.roomName,
            text: data.text

        }
        const info = await MsgModel.create(newMsg);
        return res.send(info);
    }

    //update msg by Id
    static async update (req, res) {
        const info = await MsgModel.findByIdAndUpdate(req.params.id, req.body);
        return res.send(info);
    }

    //remove msg by Id
    static async remove (req, res) {
        const info = await MsgModel.findByIdAndRemove(req.params.id);
        return res.send(info);
    }


}

