import React from 'react';
import PropTypes from 'prop-types';

const CityList = (props) => {
  const {cityList, currentCity, handleCityClick} = props;
  return <React.Fragment>
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityList.map((city, i) => (
            <li key={city + i} className="locations__item">
              <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
                onClick={() => handleCityClick(city)}
                href="#">
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </React.Fragment>;
};

CityList.propTypes = {
  cityList: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired
};

export default CityList;
