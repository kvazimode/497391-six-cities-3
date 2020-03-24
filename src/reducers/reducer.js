import {combineReducers} from 'redux';
import appReducer from './app/reducer.js';
import dataReducer from './data/reducer.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.APP]: appReducer,
  [NameSpace.DATA]: dataReducer
});
