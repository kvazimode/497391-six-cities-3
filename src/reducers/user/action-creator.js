import ActionType from '../action-type.js';

const ActionCreator = {
  setAthorized: (authStatus) => ({
    type: ActionType.SET_AUTH_STATUS,
    payload: authStatus
  })
};

export default ActionCreator;
