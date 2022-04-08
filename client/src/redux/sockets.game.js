import io from 'socket.io-client';
import { changeRoomStatAC, changeRoomStatFinished } from '../redux/actions/room.actions';

let socket;
export let currentRoom = [];


// Socket Init

export const initSocket = ({
	roomHash,
	userId,
	roomId,
	creator
}) => {
	socket = io(process.env.REACT_APP_SERVER_HOST);
	if (socket && roomHash && userId && roomId) socket.emit('join', { roomHash, userId, roomId, isCreator });


// установка текущего числа пользователей в комнате
	socket.on('currentUsers', (currentUsers) => {
		setCurrentUsers(currentUsers);
		if (currentUsers.length === room['max_players']) {
			setFullRoom(true);
		} else {
			setFullRoom(false);
		}
	});
}
