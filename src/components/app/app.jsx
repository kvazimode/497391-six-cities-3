import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offerCount = 0} = props;

  return <React.Fragment>
    <Main offerCount = {offerCount} />
  </React.Fragment>;
};

export default App;
