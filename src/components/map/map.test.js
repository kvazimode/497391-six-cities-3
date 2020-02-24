import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

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

it(`Render map`, () => {
  const tree = renderer
  .create(<Map offerList={offerList} />,
      {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
