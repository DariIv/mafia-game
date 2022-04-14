import { io } from "socket.io-client";

const options = {
  "force new connection": true,
  reconnectionAttempts: "Infinity", // avoid having user reconnect manually in order to prevent dead clients after a server restart
  timeout : 10000, // before connect_error and connect_timeout are emitted.
  transports : ["websocket"]
}



export const socket = io(process.env.PORT, options)


// голосование

export const sendMessage = (topic, data) => {
  if (!socket) {
    return false;
  }

  socket.emit(topic, data);
};

export const subscribeToNewMessages = (cb) => {
  if (!socket) {
    return false;
  }

  socket.on('new-vote', (message) => {
    cb(message);
  });
};
