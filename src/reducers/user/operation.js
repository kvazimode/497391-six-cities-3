import {AuthStatus} from '../../utils.js';
import ActionCreator from './action-creator.js';

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.setAthorized(AuthStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password
    })
      .then(() => {
        dispatch(ActionCreator.setAthorized(AuthStatus.AUTH));
      });
  }
};

export default Operation;
