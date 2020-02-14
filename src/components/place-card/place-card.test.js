import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const title = `Название на русском языке`;

describe(`Render place card`, () => {
  it(`Should render russian title`, () => {
    const tree = renderer
      .create(<PlaceCard title={title} onOfferTitleClick={()=>{}}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should return null`, () => {
    const tree = renderer
      .create(<PlaceCard title={``} onOfferTitleClick={()=>{}}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
