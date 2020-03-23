import ActionType from '../action-type';
import {assign} from '../../utils.js';

const initState = {
  offerList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER_LIST:
      return assign(state, {offerList: action.payload})
  }

  return state;
}

export default reducer;
