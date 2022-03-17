import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import { store } from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
};

export { App };
