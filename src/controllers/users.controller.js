const UserModel = require("../models/users.model");
const RoomModel = require("../models/rooms.model");

class UserController {
    //get user by Id
    static async getOne (req, res) {
        const info = await UserModel.find({userId: req.params.id});
        return res.send(info);
    }
    //get users 
    static async getAll (req, res) {
    const info = await UserModel.find();
    return res.json(info)
    }

    //get users by room Id  
    static async getAllByRoomId (req, res) {
        const info = await UserModel
        .find({roomId: req.params.id})
        // .populate('roomId');
        return res.send(info);
    }

    //create user
    static async create (req, res) {
        const info = await UserModel.create(req.body);
        console.log(req.body)
        console.log('done98')
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