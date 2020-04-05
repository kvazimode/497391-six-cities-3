import NameSpace from '../name-space.js';
import {AuthStatus} from '../../const.js';

export const getAuthState = (state) =>
  state[NameSpace.USER].authStatus === AuthStatus.AUTH;

const UserSelector = {
  getAuthState
};

export default UserSelector;
