import ActionType from '../action-type.js';

const ActionCreator = {
  loadOfferList: (offerList) => ({
    type: ActionType.LOAD_OFFER_LIST,
    payload: offerList
  }),
  loadCityList: (cityList) => ({
    type: ActionType.LOAD_CITY_LIST,
    payload: cityList
  })
};

export default ActionCreator;
