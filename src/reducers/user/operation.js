import {AuthStatus, AppRoute} from '../../const.js';
import ActionCreator from './action-creator.js';

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(AppRoute.LOGIN)
      .then(() => {
        dispatch(ActionCreator.setAthorized(AuthStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(AppRoute.LOGIN, {
      email: authData.login,
      password: authData.password
    })
      .then(() => {
        dispatch(ActionCreator.setAthorized(AuthStatus.AUTH));
      });
  }
};

export default Operation;
