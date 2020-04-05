import ActionType from '../action-type';
import {assign} from '../../utils.js';
import {AuthStatus} from '../../const.js';

const initState = {
  authStatus: AuthStatus.NO_AUTH
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return assign(state, {authStatus: action.payload});
  }

  return state;
};

export default reducer;
