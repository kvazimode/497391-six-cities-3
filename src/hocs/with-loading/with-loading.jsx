import React from 'react';
import {connect} from 'react-redux';
import {getLoadingState} from '../../reducers/app/selectors.js';
import PropTypes from 'prop-types';

const withLoading = (Component) => {
  const WithLoading = (props) => {
    if (props.isLoading) {
      return <h1>Almost loaded!</h1>;
    }
    return <Component {...props} />;
  };

  WithLoading.propTypes = {
    isLoading: PropTypes.bool
  };

  const mapStateToProps = (state) => {
    return {isLoading: getLoadingState(state)};
  };

  return connect(mapStateToProps)(WithLoading);
};


export default withLoading;
