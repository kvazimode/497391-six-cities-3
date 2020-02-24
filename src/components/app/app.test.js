import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const offerList = [
  {
    id: 1,
    title: `Годная ночлежка`,
    imgLink: `img/apartment-01.jpg`,
    value: 120,
    type: `Apartment`,
    isPremium: true,
    rating: 80,
    сoord: [52.38333, 4.9]
  },
  {
    id: 2,
    title: ``,
    imgLink: `img/apartment-01.jpg`,
    value: 120,
    type: `Apartment`,
    isPremium: true,
    rating: 80,
    сoord: [52.38333, 4.9]
  }
];

it(`Render app with main component.`, () => {
  const tree = renderer
    .create(<App offerList={offerList}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
