import {reducer, ActionType, ActionCreator} from './reducer.js';
import {getCityList, getOfferListByCity} from './utils.js';
import offerList from './mocks/offers.js';

const cityList = getCityList(offerList);

it(`Should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cityList,
    currentCity: `Amsterdam`,
    currentOffer: null,
    offerList: getOfferListByCity(offerList, cityList[0])
  });
});

it(`Should return offerList for given city`, () => {
  expect(reducer({
    cityList,
    currentCity: ``,
    currentOffer: null,
    offerList
  }, ActionCreator.getOfferList(`Paris`))).toEqual({
    cityList,
    currentCity: ``,
    currentOffer: null,
    offerList: [{
      id: 3,
      title: `You can't live closer to Eiffel Tower`,
      imgLink: `img/apartment-02.jpg`,
      value: 132,
      type: `Apartment`,
      isPremium: false,
      rating: 80,
      coord: [48.856626, 2.292919],
      city: `Paris`
    }]
  });
});

it(`Should return action to set city`, () => {
  expect(ActionCreator.setCity(`Hamburg`)).toEqual({
    type: ActionType.SET_CITY,
    payload: `Hamburg`
  });
});
