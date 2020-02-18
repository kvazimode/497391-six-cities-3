import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offerList from './mocks/offers.js';

ReactDOM.render(
    <App offerList={offerList}/>,
    document.querySelector(`#root`)
);
