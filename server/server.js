const express = require('express');
const config = require('./config/config');

const registrationRouter = require('./routes/registrationRouter.route');
const loginRouter = require('./routes/loginRouter.route');
const sessionRouter = require('./routes/sessionRouter.route');

const http = require('http');
const { Server: SocketIOServer } = require('socket.io');
const { Game, Room, UserInRooms } = require('./db/models');

const app = express();
const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/session', sessionRouter);


// SOCKETS FUNCTIONS
// подключаем функции для сокетов !!! ПЕРЕНЕСТИ ВМЕСТЕ С СОКЕТАМИ !!!
const {
  addUserInRoom,
  allUsersInRoom,
  userLeavesRoomWaiting,
  getUsersInRoomSocket,
  getMaxUsers
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
io.on('connection', (socket) => {
	socket.on('disconnect', async () => {
		const currentUsers = await userLeavesRoomWaiting(socket.id);
		if (currentUsers === null) {
			io.to(socket.id).emit('roomUndefined');
		} else {
			const { roomHash, usersInRoom } = currentUsers;
			if (usersInRoom && usersInRoom.length === 0) {
				io.to(roomHash).emit('closeRoom');
			}
			socketStore[roomHash].users = usersInRoom;
			io.to(roomHash).emit('currentUsers', usersInRoom);
		}
	});

// нужен сокет для запуска игры, роли, сокет для состояний игры(чтобы появлялись день и ночь)
// стастистика

app.listen(PORT, () => {
  console.log(`*** Working at PORT: ${PORT} ***`);
});
