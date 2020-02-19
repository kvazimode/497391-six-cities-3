import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class OfferList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offerId: null
    };
    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._offerTitleClickHandler = this._offerTitleClickHandler.bind(this);
  }
  render() {
    const {offerList} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offerList.map((offer, i) =>
          <PlaceCard
            key={offer.id + `_` + i}
            offer={offer}
            onOfferTitleClick={this._offerTitleClickHandler}
            onCardMouseEnter={this._mouseEnterHandler}
          />)
        }
      </div>
    );
  }

  _mouseEnterHandler(id) {
    this.setState({offerId: id});
  }
  _offerTitleClickHandler() {

  }
}

OfferList.propTypes = {
  offerList: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default OfferList;
