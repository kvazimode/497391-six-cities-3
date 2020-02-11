import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const data = {
  offerCount: 707,
  offerTitles: [`The place you were looking for`, `Barn, but look at this view!`, `Wooden house with free food`, `Beach camping`]
};

ReactDOM.render(
    <App {...data}/>,
    document.querySelector(`#root`)
);
