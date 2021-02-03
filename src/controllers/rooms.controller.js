const MsgModel = require("../models/messages.model");
const RoomModel = require("../models/rooms.model");

class RoomController {

    //get room by Id
    static async getOne (req, res) {
        const info = await RoomModel
        .findOne({roomId: req.params.id});
        res.send(info);
    }
   
    

    //get rooms
    static async getAll (req, res) {
        const info = await RoomModel.find();
        res.send(info);
    }


}
module.exports = RoomController;