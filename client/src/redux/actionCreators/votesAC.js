import { GET_VOTES, ADD_VOTE, RESET_VOTES } from '../actionTypes/votesAT';

export const getVotes = (votes) => {
  return {
    type: GET_VOTES,
    votes
  }
}

export const addVote = (vote) => {
  return {
    type: ADD_VOTE,
    vote
  }
}

export const resetVotes = () => {
  return {
    type: RESET_VOTES,
    votes: {}
  }
}
