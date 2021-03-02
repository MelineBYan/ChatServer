const app = require("../app");
const debug = require("debug")("node-chat:server");
const http = require("http");
const dotenv = require("dotenv");
const socketIO = require("socket.io");
const RoomModel = require("../src/models/rooms.model");
const UserModel = require("../src/models/users.model");
const MsgModel = require("../src/models/messages.model");
const connection = require("../connection");

const port = normalizePort(process.env.PORT || "3000");
const server = http.createServer(app);
app.set("port", port);
dotenv.config();
const io = socketIO(server);

require("../sockets/index")(io);

io.on("connection", (socket) => {
  // // Send online user list
  // socket.emit('get online user', User.getOnlineUser());
  // let connectedUser = new User(socket.id, false);
  // User.users.set(socket.id, connectedUser);
  // // Login
  // socket.on('login', (fullName) => {
  //   // Check user
  //   let isUsing = false;
  //   User.users.forEach((key) => {
  //     if (key.fullname == fullName) {
  //       isUsing = true;
  //     }
  //   });
  //   socket.emit('check user', isUsing);
  //   // Add User
  //   if (User.users.has(socket.id) && !isUsing) {
  //     let currentUser = User.users.get(socket.id);
  //     currentUser.isLogin = true;
  //     currentUser.fullname = fullName;
  //     io.emit('new user', fullName);
  //   }
  // });
  // // Send message
  // socket.on('send message', (message) => {
  //   socket.broadcast.emit('new message', message);
  // });
  // // Disconnect
  // socket.on('disconnect', (reason) => {
  //   let currentUser = User.users.get(socket.id);
  //   if (currentUser.isLogin) {
  //     io.emit('exit user', currentUser.fullname);
  //   }
  //   User.users.delete(socket.id);
  //   // Send new online user list to all online user
  //   io.emit('get online user', User.getOnlineUser());
  // });
});
// RoomModel
//         .findOne({roomName:"languages"})
//         .populate({path: 'users', select: 'name -_id'})
//         .exec((err, users) => {
//           if (err) return console.log(err)
//           console.log(users)
//         });

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
