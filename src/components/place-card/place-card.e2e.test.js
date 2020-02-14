import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const title = `Название на русском языке`;

describe(`Title click test`, () => {
  it(`Title click returns callback`, () => {
    const handleOfferTitleClick = jest.fn();
    const mainScreen = shallow(
        <PlaceCard
          title={title}
          onOfferTitleClick={handleOfferTitleClick}
        />
    );

    const offerTitle = mainScreen.find(`.place-card__name`);
    offerTitle.simulate(`click`);
    expect(handleOfferTitleClick.mock.calls.length).toBe(1);
  });

  it(`Title click should not return callback`, () => {
    const handleOfferTitleClick = jest.fn();
    const mainScreen = shallow(
        <PlaceCard
          title={title}
          onOfferTitleClick={() => {}}
        />
    );

    const offerTitle = mainScreen.find(`.place-card__name`);
    offerTitle.simulate(`click`);
    expect(handleOfferTitleClick.mock.calls.length).toBe(0);
  });
});
