const { Room, UserInRoom, User, sequelize } = require('../db/models');


// запись юзеров в базу (UserInName), которые зашли в комнату - возвращает массив объектов

async function addUserInRoom(userId, roomId, roleId, creator, isAlive, socketId) {
	try {
		const addUser = await UserInRoom.create({
			user_id: userId,
			room_id: roomId,
      role_id: roleId,
      creator: creator,
      is_alive: isAlive,
			socket_id: socketId
		});
		return await allUsersInRoom(roomId);
	} catch (error) {
		console.error(error);
		return error;
	}
}


// показать юзеров в комнате - возвращает массив объектов

const allUsersInRoom = async (roomId) => {
	try {
		const rawUsersInRoom = await UserInRoom.findAll({
			raw: true,
			attributes: [ 'room_id' ],
			include: [
				{
					model: Room,
					where: {
						id: roomId
					},
					attributes: []
				},
				{
					model: User,
					attributes: [ 'user_name', 'user_email', 'id' ]
				}
			]
		});
		const usersInRoom = rawUsersInRoom.map((user) => {
			const {
				room_id: roomId,
				['User.user_name']: username,
				['User.user_email']: email,
				['User.id']: userId
			} = user;
			return { roomId, username, email, userId };
		});
		return usersInRoom;
	} catch (error) {
		console.error(error);
		return error;
	}
};

// удалить юзера из комнаты во время ожидания - возвращает количество удалённых строк

const userLeavesRoomWaiting = async (socketId) => {
	try {
		const usersInRoom = await UserInRoom.findOne({
			where: { socket_id: socketId },
			include: {
				model: Room,
				attributes: [ 'room_hash', 'status' ]
			}
		});
		if (usersInRoom === null) {
			return usersInRoom;
		} else {
			const { creator, room_id, user_id, Room: { dataValues: { room_hash: roomHash, status } } } = usersInRoom;
			if (status === 'waiting') {
				if (creator) {
					const deleteWholeRoom = await Room.destroy({ where: { id: room_id } });
					return { roomHash, usersInRoom: await allUsersInRoom(room_id) };
				} else {
					const deleteSingleUser = await UserInRoom.destroy({ where: { user_id, room_id } });
					return { roomHash, usersInRoom: await allUsersInRoom(room_id) };
				}
			} else {
				const deleteSingleUser = await UserInRoom.destroy({ where: { user_id, room_id } });
				return { roomHash, usersInRoom: await allUsersInRoom(room_id) };
			}
		}
	} catch (error) {
		console.error(error);
		return error;
	}
};


// получить кол-во юзеров в команте сокетами

// функция получения количества юзеров в комнате (socket)
const getUsersInRoomSocket = (io, roomHash) => {
	if (io.sockets.adapter.rooms.get(roomHash)) {
		return io.sockets.adapter.rooms.get(roomHash).size;
	} else { 
    return 0 
  }
};

// макс кол-во игроков в комнате
const getMaxUsers = async (roomId) => {
	try {
		const { max_players } = await Room.findOne({ where: { id: roomId } });
		return max_players;
	} catch (error) {
		console.error(error);
		return error;
	}
};

// получить статистику по комнате

module.exports = {
	addUserInRoom,
  allUsersInRoom,
  userLeavesRoomWaiting,
  getUsersInRoomSocket,
  getMaxUsers
};
