const express = require('express');
const { version, validate } = require('uuid');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const config = require('./config/config');

const registrationRouter = require('./routes/registrationRouter.route');
const loginRouter = require('./routes/loginRouter.route');
const sessionRouter = require('./routes/sessionRouter.route');

// const { Server: SocketIOServer } = require('socket.io');
const { Game, Room, UserInRooms } = require('./db/models');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' },
});
app.use(cors());
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

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/session', sessionRouter);
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


// SOCKETS FUNCTIONS
// функции для сокетов !!
const {
  addUserInRoom,
  allUsersInRoom,
} = require('./utils/funcsForRooms');


// const httpServer = http.createServer(app);

// const io = new SocketIOServer(httpServer, {
// 	cors: {
// 		origin: 'http://localhost:3000',
// 		methods: [ 'GET', 'POST' ]
// 	}
// });

// app.use(
// 	cors({
// 		credentials: true,
// 		origin: [
// 			'http://localhost:3001',
// 			'http://localhost:3000'
// 		]
// 	})
// );

app.use((req, res, next) => {
	if (req.session) {
		res.locals.userId = req.session.userId;
		res.locals.username = req.session.username;
		res.locals.email = req.session.email;
	}
	next();
});

// Сокеты, юзер в комнате
let socketStore = {};

// подключить юзера в комнату
socket.on('join', async ({ roomHash, userId, roomId, roleId, creator, isAlive, socketId }) => {
  const userInSocketRoom = getUsersInRoomSocket(io, roomHash);
  const maxUsersInRoom = await getMaxUsers(roomId);
  if (userInSocketRoom < maxUsersInRoom) {
    socket.join(roomHash);

    const usersInRoom = await addUserInRoom(userId, roomId, roleId,сreator, isAlive, socket.id);
    socketStore[roomHash] = {};
    socketStore[roomHash].users = usersInRoom;

    io.to(roomHash).emit('currentUsers', usersInRoom);
  } else {
    io.to(socket.id).emit('roomFull');
  }
});

// убрать юзера из комнаты
// нужен сокет для запуска игры, роли, сокет для состояний игры(чтобы появлялись день и ночь)
// стастистика

app.listen(PORT, () => {
httpServer.listen(4000, () => {
  console.log(`*** Working at PORT: ${PORT} ***`);
});
