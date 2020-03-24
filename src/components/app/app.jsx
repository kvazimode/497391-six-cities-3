import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {getSortType, getCurrentCity, getCurrentOffer} from '../../reducers/app/selectors.js';
import {getCities} from '../../reducers/data/selectors.js';
import {getSortedOfferList} from '../../reducers/selectors.js';
import withLoading from '../../hocs/with-loading/with-loading.jsx';

class App extends PureComponent {

  _renderApp() {
    const {
      cityList,
      currentCity,
      offerList,
      sortType,
      handleCityClick,
      handleOfferTitleClick
    } = this.props;

    return (
      <Main
        offerList={offerList}
        cityList={cityList}
        currentCity={currentCity}
        sortType={sortType}
        handleCityClick={handleCityClick}
        handleOfferTitleClick={handleOfferTitleClick}
      />
    );
  }
  render() {
    return this._renderApp();
  }
}

App.propTypes = {
  offerList: PropTypes.array.isRequired,
  cityList: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentOffer: PropTypes.object,
  handleCityClick: PropTypes.func.isRequired,
  handleOfferTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cityList: getCities(state),
    currentCity: getCurrentCity(state),
    offerList: getSortedOfferList(state),
    sortType: getSortType(state),
    currentOffer: getCurrentOffer(state)
  };
};

export {App};
export default withLoading(connect(mapStateToProps)(App));
