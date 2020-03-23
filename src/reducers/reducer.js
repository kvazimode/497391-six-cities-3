import {combineReducers, applyMiddleware} from 'redux';
import appReducer from './app/reducer.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.APP]: appReducer,
});
