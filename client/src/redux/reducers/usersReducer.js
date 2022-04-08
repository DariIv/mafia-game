const initialState = { users: [] }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_USERS':
      return { ...state, users: action.payload }

    case "ADD_USERS":
      return { ...state, users: [...state.users, action.payload]}  

    default:
      return state
  }
}
