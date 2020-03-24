import NameSpace from '../name-space.js';

export const getSortType = (state) =>
  state[NameSpace.APP].sortType || `popular`;

export const getCurrentCity = (state) =>
  state[NameSpace.APP].currentCity.name;

export const getCurrentOffer = (state) =>
  state[NameSpace.APP].currentOffer;

export const getLoadingState = (state) =>
  state[NameSpace.APP].isLoading;

const AppSelector = {
  getSortType,
  getCurrentCity,
  getCurrentOffer,
  getLoadingState
};

export default AppSelector;
