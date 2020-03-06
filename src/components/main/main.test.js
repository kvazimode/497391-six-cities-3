import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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
  const tree = renderer
    .create(<Main
      offerList={offerList}
      currentCity={currentCity}
      cityList={cityList}
      handleCityClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
