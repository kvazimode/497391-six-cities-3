import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer.js';
import {Loader} from './reducers/data-loader.js';
import Operation from './reducers/user/operation.js';
import ActionCreator from './reducers/user/action-creator.js';
import {AuthStatus} from './utils.js';
import createAPI from './api/api.js';
import thunk from 'redux-thunk';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.setAuthorized(AuthStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Loader.loadOfferList());
store.dispatch(Operation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
