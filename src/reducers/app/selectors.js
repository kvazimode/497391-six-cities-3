import NameSpace from '../name-space.js';

export const getSortType = (state) => {
  state[NameSpace.APP].sortType || `popular`;
};

export const getCurrentCity = (state) => {
  state[NameSpace.APP].currentCity;
};

export const getCurrentOffer = (state) => {
  state[NameSpace.APP].currentOffer;
};

const AppSelector = {
  getSortType,
  getCurrentCity,
  getCurrentOffer
};

export default AppSelector;
