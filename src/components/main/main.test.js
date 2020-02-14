import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const titles = [
  `Название на русском языке`,
  `Really long title Really long title Really long title Really long title Really long title`,
  `Your last oportunity`,
  `Best place in the world`,
  `You should be there!`
];

it(`Render Main component.`, () => {
  const tree = renderer
    .create(<Main
      offerCount={titles.length}
      offerTitles={titles}
      onOfferTitleClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
