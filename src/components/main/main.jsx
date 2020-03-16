import React from 'react';
import PropTypes from 'prop-types';
import OfferList from '../offer-list/offer-list.jsx';
import Map from '../map/map.jsx';
import CityList from '../city-list/city-list.jsx';
import SortSetter from '../sort-setter/sort-setter.jsx';

const Main = (props) => {
  const {
    offerList,
    handleCityClick,
    currentCity,
    cityList,
    handleOfferTitleClick
  } = props;
  const offerCount = offerList.length;

  return <React.Fragment>
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <CityList cityList={cityList} currentCity={currentCity} handleCityClick={handleCityClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in {currentCity}</b>
              <SortSetter />
              <OfferList
                offerList={offerList}
                handleOfferTitleClick={handleOfferTitleClick}
              />
            </section>
            <div className="cities__right-section">
              <Map offerList={offerList} currentCity={currentCity}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  </React.Fragment>;
};

Main.defaultProps = {
  offerCount: 0,
  offerList: [`Ошибка загрузки`]
};

Main.propTypes = {
  offerList: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  cityList: PropTypes.array.isRequired,
  handleOfferTitleClick: PropTypes.func.isRequired,
  handleCityClick: PropTypes.func.isRequired
};

export default Main;
