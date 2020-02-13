import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const title = `Название на русском языке`;

it(`Title click returns callback`, () => {
  const handleOfferTitleClick = jest.fn();
  const mainScreen = shallow(
      <PlaceCard
        title={title}
        onOfferTitleClick={handleOfferTitleClick}
      />
  );

  const offerTitle = mainScreen.find(`.place-card__name`);
  offerTitle.props().onClick();
  expect(handleOfferTitleClick.mock.calls.length).toBe(1);
});
