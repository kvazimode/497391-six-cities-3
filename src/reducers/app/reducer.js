import ActionType from '../action-type.js';

const initState = {
  currentCity: null,
  currentOffer: null,
  sortType: `popular`
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return assign(state, {currentCity: action.payload});
    case ActionType.GET_CURRENT_OFFER:
      return assign(state, {currentOffer: action.payload});
    case ActionType.SET_SORT_TYPE:
      return assign(state, {sortType: action.payload});
  }

  return state;
};

export default reducer;
