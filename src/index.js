import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const Data = {
  offerCount: 707,
  prop1: {
    test: `test data`
  }
};

ReactDOM.render(
    <App {...Data} />,
    document.querySelector(`#root`)
);
