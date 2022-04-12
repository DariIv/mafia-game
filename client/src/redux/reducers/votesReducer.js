import { GET_VOTES, ADD_VOTE, RESET_VOTES } from '../actionTypes/votesAT';

const defaultVotes = {};

export const votesReducer = (state = defaultVotes, action) => {
  switch (action.type) {
    
    case GET_VOTES:
      return state;
    
      case ADD_VOTE:
      const newState = Object.assign({}, state);
      newState[action.vote.whoVoted] = action.vote.whoFor;
      return newState;
    
      case RESET_VOTES:
      return action.votes;
    
      default:
      return state;
  }
}
