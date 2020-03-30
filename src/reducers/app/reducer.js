import ActionType from '../action-type.js';
import {assign} from '../../utils.js';

const initState = {
  currentCity: null,
  currentOffer: null,
  sortType: `popular`,
  isLoading: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return assign(state, {currentCity: action.payload});
    case ActionType.GET_CURRENT_OFFER:
      return assign(state, {currentOffer: action.payload});
    case ActionType.SET_SORT_TYPE:
      return assign(state, {sortType: action.payload});
    case ActionType.SET_LOADING_STATE:
      return assign(state, {isLoading: action.payload});
  }

  return state;
};

export default reducer;
