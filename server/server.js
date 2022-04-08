const express = require('express');
const { version, validate } = require('uuid');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const config = require('./config/config');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' },
});

const ACTIONS = require('../client/src/socket/actions');

app.get('/', (req, res) => { });

io.on('connection', (socket) => {
  // console.log(socket.id);
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT ?? 3000;

config(app);

// Video
io.on('connection', (socket) => {
  console.log('Socket connected');
});

// Комнаты в которых будут клиенты

function getClientRooms() {
  const { rooms } = io.sockets.adapter;

  return Array.from(rooms.keys()).filter((roomID) => validate(roomID) && version(roomID) === 4); // чтобы не показывались дефолтные комнаты на 31 минуте)
}

// Список всех доступных комнат для клиентов

function shareRoomsInfo() {
  io.emit(ACTIONS.SHARE_ROOMS, {
    rooms: getClientRooms(),
  });
}

// описание присоединения к комнатам
io.on('connection', (socket) => {
  shareRoomsInfo();

  socket.on(ACTIONS.JOIN, (config) => {
    const { room: roomID } = config; // рум айди
    const { rooms: joinedRooms } = socket; // все комнаты которые есть чтобы не подключиться к ним повторно(в которых уже есть сокет)

    if (Array.from(joinedRooms).includes(roomID)) {
      return console.warn(`Already joined to ${roomID}`); // предупреждение о том что уже подключены
    }

    const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []); // если все ок то получаем всех клиентов подключенных к комнате

    clients.forEach((clientID) => {
      io.to(clientID).emit(ACTIONS.ADD_PEER, { // перебираем всех клиентов и отправляеем оффер
        peerID: socket.id,
        createOffer: false,
      });

      socket.emit(ACTIONS.ADD_PEER, {
        peerID: clientID,
        createOffer: true,
      });
    });

    socket.join(roomID); // подключилаемся к комнате и делимся информацией
    shareRoomsInfo();
  });

  function leaveRoom() {
    const { rooms } = socket; // логика на отключение из комнаты

    Array.from(rooms)
      // LEAVE ONLY CLIENT CREATED ROOM
      .filter((roomID) => validate(roomID) && version(roomID) === 4)
      .forEach((roomID) => {
        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

        clients
          .forEach((clientID) => {
            io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
              peerID: socket.id,
            });

            socket.emit(ACTIONS.REMOVE_PEER, {
              peerID: clientID,
            });
          });

        socket.leave(roomID);
      });

    shareRoomsInfo();
  }

  socket.on(ACTIONS.LEAVE, leaveRoom);
  socket.on('disconnecting', leaveRoom);

  socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => { // когда получили SDP отправляем ивент кот. отправляем от текущегг пира(нас)
    io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
      peerID: socket.id,
      sessionDescription,
    });
  });

  socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => { // примерно делает тоже самое
    io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
      peerID: socket.id,
      iceCandidate,
    });
  });
});

httpServer.listen(4000, () => {
  console.log(`*** Working at PORT: ${PORT} ***`);
});
