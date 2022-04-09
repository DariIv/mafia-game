import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  user: {
		value: {},
		error: null
	},
   	game: [],
  	room: {},
	waitingRooms: {
		value: [],
		error: null
	}
};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
