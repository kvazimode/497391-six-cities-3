import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const offerList = [
  {
    id: 1,
    title: `Годная ночлежка`,
    imgLink: `img/apartment-01.jpg`,
    value: 120,
    type: `Apartment`,
    isPremium: true,
    rating: 80,
    сoord: [52.38333, 4.9],
    city: `Amsetrdam`
  },
  {
    id: 2,
    title: ``,
    imgLink: `img/apartment-01.jpg`,
    value: 120,
    type: `Apartment`,
    isPremium: true,
    rating: 80,
    сoord: [52.38333, 4.9],
    city: `Paris`
  }
];

const cityList = [`Amsterdam`, `Hamburg`];
const currentCity = `Amsterdam`;

it(`Render Main component.`, () => {
  const store = mockStore({
    offerList,
    currentCity: `Amsterdam`,
    cityList: [`Amsterdam`, `Hamburg`]
  });
  const tree = renderer
    .create(
    <Provider store={store}>
      <Main
        offerList={offerList}
        currentCity={currentCity}
        cityList={cityList}
        handleCityClick={() => {}}
        handleOfferTitleClick={() => {}}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
