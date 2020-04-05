import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthStatus} from '../../const.js';
import {getAuthState} from '../../reducers/user/selectors.js';

const PrivateRoute = (props) => {
  const {render, path, exact, authStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authStatus === AuthStatus.AUTH ?
            render() :
            <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authStatus: PropTypes.string,
  render: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool
};

const mapStateToProps = (state) => ({
  authStatus: getAuthState(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
