import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

class App extends PureComponent {

  _renderApp() {
    const {
      cityList,
      currentCity,
      offerList,
      handleCityClick,
      handleOfferTitleClick
    } = this.props;

    return (
      <Main
        offerList={offerList}
        cityList={cityList}
        currentCity={currentCity}
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
    cityList: state.cityList,
    currentCity: state.currentCity,
    offerList: state.offerList,
    currentOffer: state.currentOffer
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(currentCity) {
    dispatch(ActionCreator.setCity(currentCity));
    dispatch(ActionCreator.getOfferList(currentCity));
  },
  handleOfferTitleClick(offer) {
    dispatch(ActionCreator.getCurrentOffer(offer));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
