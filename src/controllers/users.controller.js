const MsgModel = require("../models/messages.model");
const RoomModel = require("../models/rooms.model");

class UsersController {

    //get user by Id
    static async getOne (req, res) {
        const info = await RoomModel.find({userId: req.params.id});
        return info;
    }

    //get users by room Id  room/users
    static async getAllUsersByRoomId (req, res) {
        const info = await RoomModel.find({roomId: req.params.id});
        return info;
    }

    //create user
    static async create (req, res) {
        const info = await UserModel.create(req.body);
        return info;
    }

    //update user by Id
    static async update (req, res) {
        const info = await UserModel.findByIdAndUpdate(req.params.id, req.body);
        return info;
    }

    //remove user by Id
    static async remove (req, res) {
        const info = await UserModel.findByIdAndRemove(req.params.id);
        return info;
    }

}