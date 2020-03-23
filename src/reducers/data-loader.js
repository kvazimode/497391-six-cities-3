import {ActionCreator as DataAction} from './data/action-creator.js';
import {ActionCreator as AppAction} from './app/action-creator.js';
import {getOfferListByCity, getCityList} from '../utils.js';

export const loadOfferList = () => (dispatch, getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {
      const data = response.data;
      dispatch(DataAction.loadOfferList(offerList));
      dispatch(AppAction.setCity(city))

    })
}

