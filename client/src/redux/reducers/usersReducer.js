const initialState = { users: '' }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_USERS':
      console.log(action.payload);
      return { ...state, users: action.payload.name }
      
      case "ADD_USERS":
        console.log(action.payload)
        localStorage.setItem('user', action.payload.name)
      return { ...state, users: action.payload.name}  

    default:
      return state
  }
}
