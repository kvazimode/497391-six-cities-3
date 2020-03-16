import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {offer, onOfferTitleClick, onCardMouseEnter} = props;

  if (!offer.title) {
    return null;
  }

  return <React.Fragment>
    <article className="cities__place-card place-card" onMouseEnter={() => (onCardMouseEnter(offer))}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.imgLink} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onOfferTitleClick}>
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  </React.Fragment>;
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgLink: PropTypes.string,
    value: PropTypes.number,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    rating: PropTypes.number
  }).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired
};

export default PlaceCard;
