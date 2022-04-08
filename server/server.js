const config = require("./config/config");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

app.get("/", (req, res) => {});

io.on("connection", (socket) => {
  // console.log(socket.id);
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT ?? 3000;

config(app);

httpServer.listen(4000, () => {
  console.log(`*** Working at PORT: ${PORT} ***`);
});
