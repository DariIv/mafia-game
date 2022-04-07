import { INIT_GAME, UPDATE_PLAYERS, VOTE_PLAYER, TICK_TIME } from '../actionTypes/gameAT';

export const InitPlayersAction = (payload) => {
  return {
    type: INIT_GAME,
    game: Game
  }
}
export const UpdatePlayersAction = (payload) => {
  return {
    type: UPDATE_PLAYERS,
    players: Player[]
  }
}

export const VotePlayerAction = (payload) => {
  return {
    type: VOTE_PLAYER,
    players: Player[]
  }
}

export const ActionPlayerAction = (payload) =>  {
  return {
    type: ACTION_PLAYER,
    players: Player[]
  }
}

export const FinishActionAction = (payload) =>  {
  return {
    type: VOTE_PLAYER,
    players: Player[]
  }
}

export const TickTimeAction = (payload) =>  {
  return {
    type: TICK_TIME,
    game: Game;
  }
}
