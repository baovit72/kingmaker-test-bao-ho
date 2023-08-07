import { createSelector } from 'reselect';

const getGameList = (state) => state.game.gameList;

export const selectGameList = createSelector([getGameList], (gameList) => gameList);
