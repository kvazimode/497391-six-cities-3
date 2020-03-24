import React from 'react';
import {connect} from 'react-redux';
import {getLoadingState} from '../../reducers/app/selectors.js';

const withLoading = (Component) => {
  const WithLoading = (props) => {
    if (props.isLoading) {
      return <h1>Almost loaded!</h1>;
    }
    return <Component {...props} />;
  };

  const mapStateToProps = (state) => ({
    isLoading: getLoadingState(state)
  });

  return connect(mapStateToProps)(WithLoading);
};

export default withLoading;
