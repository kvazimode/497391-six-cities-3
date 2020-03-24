import NameSpace from '../name-space.js';

export const getOffers = (state) => {
  state[NameSpace.DATA].offerList || [];
};
export const getCities = (state) => {
  state[NameSpace.DATA].cityList || [];
};

const DataSelector = {
  getOffers,
  getCities
}

export default DataSelector;
