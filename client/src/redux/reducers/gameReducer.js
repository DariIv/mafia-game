import { INIT_GAME, UPDATE_PLAYERS, VOTE_PLAYER, TICK_TIME } from '../actionTypes/gameAT';


// const initState = (num: number): Game => {
//   const arr = new Array<string>(num);
//   for (let i = 0; i < num; i++) {
//     arr[i] = "";
//   }
//   return {
//     players: arr.map((val, i) => {
//       return {
//         id: i + 1,
//         alive: true,
//         actioned: false,
//         name: "",
//         role: Roles.villager,
//         voteId: null,
//         actionId: null,
//       };
//     }),
//     date: {
//       day: 0,
//       time: Time.night,
//     },
//     state: {
//       winner: null,
//       lastDiedPlayer: null,
//     },
//   };
// };

const initialState = { Game: initState(16) }

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) { 
    case INIT_GAME:
      return { ...state, ...action.game };
    case UPDATE_PLAYERS:
      return { ...state, players: [...action.players] };
    case VOTE_PLAYER:
      return { ...state, players: [...action.players] };
    case TICK_TIME:
      return { ...state, ...action.game };

    default:
      return state
  }
}
