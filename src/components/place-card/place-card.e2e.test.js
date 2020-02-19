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

const handleOfferTitleClick = jest.fn();
const handleCardMOuseEnter = jest.fn();

it(`Title click enter triggers callback`, () => {
  const mainScreen = shallow(
      <PlaceCard
        offer={offer}
        onOfferTitleClick={handleOfferTitleClick}
        onCardMouseEnter={handleCardMOuseEnter}
      />
  );

  const offerTitle = mainScreen.find(`.place-card__name`);
  offerTitle.simulate(`click`);
  expect(handleOfferTitleClick).toHaveBeenCalledTimes(1);
});

it(`Card mouse enter triggers callback with offer id`, () => {
  const mainScreen = shallow(
      <PlaceCard
        offer={offer}
        onOfferTitleClick={handleOfferTitleClick}
        onCardMouseEnter={handleCardMOuseEnter}
      />
  );

  const card = mainScreen.find(`.place-card`);
  card.simulate(`mouseenter`);
  expect(handleCardMOuseEnter).toBeCalledWith(offer.id);
});
