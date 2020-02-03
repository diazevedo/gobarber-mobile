import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" showHideTransition="slide" />
      <Routes />
    </>
  );
};

export default App;
