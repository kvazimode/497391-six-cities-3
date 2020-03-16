import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class OfferList extends PureComponent {
  render() {
    const {offerList, handleOfferTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offerList.map((offer, i) =>
          <PlaceCard
            key={offer.id + `_` + i}
            offer={offer}
            onOfferTitleClick={handleOfferTitleClick}
            onCardMouseEnter={handleOfferTitleClick}
          />)
        }
      </div>
    );
  }
}

OfferList.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.object.isRequired),
  handleOfferTitleClick: PropTypes.func
};

export default OfferList;
