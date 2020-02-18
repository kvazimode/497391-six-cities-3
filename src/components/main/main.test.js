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
    rating: 80
  },
  {
    id: 2,
    title: ``,
    imgLink: `img/apartment-01.jpg`,
    value: 120,
    type: `Apartment`,
    isPremium: true,
    rating: 80
  }
];

it(`Render Main component.`, () => {
  const tree = renderer
    .create(<Main offerList={offerList}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
