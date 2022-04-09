import io from 'socket.io-client';

let socket;
export let currentRoom = [];


// Socket Init

export const initSocket = ({
	roomHash,
	userId,
	roomId,
	creator,
  setCurrentUsers,
  setFullRoom,
  room
}) => {
	socket = io(process.env.REACT_APP_SERVER_HOST);
	if (socket && roomHash && userId && roomId) socket.emit('join', { roomHash, userId, roomId, creator });


// сколько пользователей в комнате
	socket.on('currentUsers', (currentUsers) => {
		setCurrentUsers(currentUsers);
		if (currentUsers.length === room['max_players']) {
			setFullRoom(true);
		} else {
			setFullRoom(false);
		}
	});
};

// начало игры, создатель покинул комнату, комната не найдена, сама игра, отключить сокеты в конце
