import ActionType from '../action-type';
import {assign} from '../../utils.js';

const initState = {
  offerList: [],
  cityList: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER_LIST:
      return assign(state, {offerList: action.payload});
    case ActionType.LOAD_CITY_LIST:
      return assign(state, {cityList: action.payload});
  }

  return state;
};

export default reducer;
