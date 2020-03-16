import offerList from './mocks/offers.js';
import {assign, getCityList, getOfferListByCity} from './utils';

const cityList = getCityList(offerList);

const initialState = {
  cityList,
  currentCity: cityList[0],
  currentOffer: null,
  offerList: getOfferListByCity(offerList, cityList[0]),
  sortType: `popular`
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  GET_OFFER_LIST: `GET_OFFER_LIST`,
  GET_CURRENT_OFFER: `GET_CURRENT_OFFER`,
  SET_SORT_TYPE: `SET_SORT_TYPE`
};

const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  getOfferList: (city) => ({
    type: ActionType.GET_OFFER_LIST,
    payload: city
  }),
  getCurrentOffer: (offer) => ({
    type: ActionType.GET_CURRENT_OFFER,
    payload: offer
  }),
  setSortType: (order) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: order
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return assign(state, {currentCity: action.payload});
    case ActionType.GET_OFFER_LIST:
      return assign(state, {offerList: getOfferListByCity(offerList, action.payload)});
    case ActionType.GET_CURRENT_OFFER:
      return assign(state, {currentOffer: action.payload});
    case ActionType.SET_SORT_TYPE:
      return assign(state, {sortType: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
