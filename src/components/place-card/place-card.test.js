import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

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

describe(`Render place card`, () => {
  it(`Should render russian title`, () => {
    const tree = renderer
      .create(<PlaceCard offer={offerList[0]} onOfferTitleClick={()=>{}} onCardMouseEnter={()=>{}}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should return null`, () => {
    const tree = renderer
      .create(<PlaceCard offer={offerList[1]} onOfferTitleClick={()=>{}} onCardMouseEnter={()=>{}}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
