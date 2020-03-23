import ActionType from '../action-type.js';

const ActionCreator = {
  loadOfferList: (offerList) => ({
    type: ActionType.LOAD_OFFER_LIST,
    payload: offerList
  })
};

export default ActionCreator;
