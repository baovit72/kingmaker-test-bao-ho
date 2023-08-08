import { createSelector } from 'reselect';

const getGameData = (state) => state.game.gameData;
const getUser = (state) => state.user.user;

export const selectUsername = createSelector([getUser], (data) => data?.username);
export const selectLoggedIn = createSelector([getUser], (data) => !!data);

export const selectAvatar = createSelector([getGameData], (data) => data?.avatar);
export const selectLevel = createSelector([getGameData], (data) => data?.level);
export const selectAvatarFrame = createSelector([getGameData], (data) => data?.avatarFrame);
export const selectHasFrame = createSelector([getGameData], (data) => data?.hasFrame);
export const selectBets = createSelector([getGameData], (data) => data?.bets);
export const selectCoin = createSelector([getGameData], (data) => data?.coins);
export const selectDiamond = createSelector([getGameData], (data) => data?.diamonds);
export const selectCurrentJackpot = createSelector([getGameData], (data) => data?.currentJackpot);
export const selectRedDot = createSelector([getGameData], (data) => data?.reddot);
