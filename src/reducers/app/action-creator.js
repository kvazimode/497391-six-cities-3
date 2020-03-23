import ActionType from '../action-type.js';

const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
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
}

export default ActionCreator;
