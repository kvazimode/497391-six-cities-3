import {createSelector} from 'reselect';
import {sortList, getOfferListByCity} from '../utils.js';
import {getOffers} from './data/selectors.js';
import {getSortType, getCurrentCity} from './app/selectors.js';

export const getSortedOfferList = createSelector(
  [
    getOffers,
    getCurrentCity,
    getSortType
  ],
  (offerList, currentCity, sortType) => {
    if (offerList.length == 0) {
      return [];
    }
    return sortList(getOfferListByCity(offerList, currentCity), sortType);
  }
);
