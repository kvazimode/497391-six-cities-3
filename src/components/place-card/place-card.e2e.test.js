import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const offer = {
  id: 1,
  title: `Beautiful & luxurious apartment at graet location`,
  imgLink: `img/apartment-01.jpg`,
  value: 120,
  type: `Apartment`,
  isPremium: true,
  rating: 80
};

it(`Title click and card mouse enter triggers callback`, () => {
  const handleOfferTitleClick = jest.fn();
  const mainScreen = shallow(
      <PlaceCard
        offer={offer}
        onOfferTitleClick={handleOfferTitleClick}
        onCardMouseEnter={handleOfferTitleClick}
      />
  );

  const offerTitle = mainScreen.find(`.place-card__name`);
  const card = mainScreen.find(`.place-card`);
  offerTitle.simulate(`click`);
  card.simulate(`mouseenter`);
  expect(handleOfferTitleClick.mock.calls.length).toBe(2);
});
