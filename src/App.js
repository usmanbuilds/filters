import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import searchReducer from './containers/reducer';

import './App.css';

const store = createStore(searchReducer);

export default function App() {
  return (
      <Provider store={store}>
          <div id="app">
          </div>
       </Provider>
  );
}
