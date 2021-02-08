const UserModel = require("../models/users.model");
const RoomModel = require("../models/rooms.model");

class UserController {
    //get user by Id
    static async getOne (req, res) {
        const info = await UserModel.find({_id: req.params.id});
        return res.send(info);
    }
    //get users 
    static async getAll (req, res) {
    const info = await UserModel.find();
    return res.json(info);
    }

    //create user
    static async create (req, res) {
        const info = await UserModel.create(req.body);
        const room = await RoomModel.findOne({roomName: "languages"});
        room.users.push(info._id);
        room.save();
        return res.send(info); 
    
    }

    //update user by Id
    static async update (req, res) {
        const info = await UserModel.findByIdAndUpdate(req.params.id, req.body);
        return res.send(info);
    }

    //remove user by Id
    static async remove (req, res) {
        const info = await UserModel.findByIdAndRemove(req.params.id);
        return res.send(info);
    }

}
module.exports = UserController;