import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const title = `Название на русском языке`;

it(`Render place card component.`, () => {
  const tree = renderer
    .create(<PlaceCard title={title} onOfferTitleClick={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
