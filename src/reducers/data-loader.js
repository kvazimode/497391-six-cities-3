import DataAction from './data/action-creator.js';
import AppAction from './app/action-creator.js';
import Adapter from '../adapter/adapter.js';

export const Loader = {
  loadOfferList: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const data = Adapter.rawToOfferList(response.data);
        dispatch(DataAction.loadOfferList(data.offerList));
        dispatch(DataAction.loadCityList(data.cityList));
        dispatch(AppAction.setCity(data.cityList[0]))
      })
  }
};
