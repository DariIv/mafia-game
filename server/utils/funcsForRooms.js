const { Room, UserInRoom, User } = require('../db/models');

// запись юзеров в базу (UserInName), которые зашли в комнату - возвращает массив объектов

async function addUserInRoom(userId, roomId, roleId, creator, isAlive, socketId) {
  try {
    const addedUser = await UserInRoom.create({
      user_id: userId,
      room_id: roomId,
      role_id: roleId,
      creator,
      is_alive: isAlive,
      socket_id: socketId,
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
      attributes: ['room_id'],
      include: [
        {
          model: Room,
          where: {
            id: roomId,
          },
          attributes: [],
        },
        {
          model: User,
          attributes: ['user_name', 'user_email', 'id'],
        },
      ],
    });
    const usersInRoom = rawUsersInRoom.map((user) => {
      const {
        room_id: roomId,
        'User.user_name': username,
        'User.user_email': email,
        'User.id': userId,
      } = user;
      return {
        roomId, username, email, userId,
      };
    });
    return usersInRoom;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// получить кол-во юзеров в комнате (socket)
const getUsersInRoomSocket = (io, roomHash) => {
  if (io.sockets.adapter.rooms.get(roomHash)) {
    return io.sockets.adapter.rooms.get(roomHash).size;
  } return 0;
};

// функция получения максимального количества игроков в комнате
const getMaxUsers = async (roomId) => {
  try {
    const { max_players } = await Room.findOne({ where: { id: roomId } });
    return max_players;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// получить статистику по комнате, удалить юзера из комнаты

module.exports = {
  addUserInRoom,
  allUsersInRoom,
  getUsersInRoomSocket,
  getMaxUsers,
};
