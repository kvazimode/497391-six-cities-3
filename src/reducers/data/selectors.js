import NameSpace from '../name-space.js';

export const getOffers = (state) => {
  state[NameSpace.DATA].offers || [];
};

const DataSelector = {
  getOffers,
}

export default DataSelector;
