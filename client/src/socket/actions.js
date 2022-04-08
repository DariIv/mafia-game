//все возможные экшены для сервера и для клиента
const ACTIONS = {
  JOIN: 'join',    //присоединяемся к комнаде
  LEAVE: 'leave',   //покидаем комнату
  SHARE_ROOMS: 'share-rooms',  //поделиться комнатой
  ADD_PEER: 'add-peer',  //новое соединение между клиентами
  REMOVE_PEER: 'remove-peer', //удаление соединения
  RELAY_SDP: 'relay-sdp', //передаем стримы с медиаданными
  RELAY_ICE: 'relay-ice', //передаем физические подключения
  ICE_CANDIDATE: 'ice-candidate', //реагировать
  SESSION_DESCRIPTION: 'session-description' //когда прийдет новая сессия и надо будет ее использовать
};

module.exports = ACTIONS;