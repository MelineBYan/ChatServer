const MsgModel = require("../models/messages.model");
const RoomModel = require("../models/rooms.model");
const { ObjectId } = require('mongoose');

module.exports = class MsgsController {

    //get message by Id
    static async getOne (req, res) {
        console.log(req)
        const info = await MsgModel
        .findOne({senderId: req.params.id});
        return res.send(info);
    }
   
    //get msgs 
    static async getAll (req, res) {
        console.log(req)
        const info = await MsgModel.
        find()
        .sort({created: -1})
        .populate({path: 'senderId', select: 'name'});
        return res.send(info);
    }

    //get messages by room Id
    static async getAllByRoomId (req, res) {
        console.log(req.params)
        const info = await MsgModel
        .find({roomId: ObjectId(req.params.id)})
        .sort({created: -1})
        .limit(50)
        .populate({path: 'senderId', select: 'name'});
        return res.send(info);
    }

    //create msg
    static async create (req, res) {
        console.log(req)
        const info = await MsgModel.create(req.body);
        console.log('controller')
        info.save()
        return res.send(info);
    }

    //update msg by Id
    static async update (req, res) {
        console.log(req.body)
        const info = await MsgModel.findByIdAndUpdate(req.params.id, req.body);
        return res.send(info);
    }

    //remove msg by Id
    static async remove (req, res) {
        console.log(req)
        const info = await MsgModel.findByIdAndRemove(req.params.id);
        return res.send(info);
    }


}

