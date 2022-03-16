import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export { App };
