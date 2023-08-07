import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import gameReducer from './reducers/gameReducer';

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

//Deprecated, should be moved to redux toolkit
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
