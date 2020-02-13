import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

const titles = [
  `Название на русском языке`,
  `Really long title Really long title Really long title Really long title Really long title`,
  `Your last oportunity`,
  `Best place in the world`,
  `You should be there!`
]

it(`Render app with main component.`, () => {
  const tree = renderer
    .create(<App 
      offerCount={titles.length}
      offerTitles={titles}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
