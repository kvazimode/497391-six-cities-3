import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const data = {
  offerCount: 707
};

ReactDOM.render(
    <App {...data} />,
    document.querySelector(`#root`)
);
