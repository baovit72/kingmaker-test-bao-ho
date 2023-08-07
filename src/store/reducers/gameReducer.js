const initialState = {
  gameData: null,
  gameList: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GAME_DATA':
      return {
        ...state,
        gameData: action.payload,
      };
    case 'SET_GAME_LIST':
      return {
        ...state,
        gameList: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
