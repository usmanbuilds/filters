import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import searchReducer from './containers/reducer';

import SearchFilters from './containers/SearchFilters';
import SearchResults from './containers/SearchResults';

import './App.css';

const store = createStore(searchReducer);

export default function App() {
  return (
      <Provider store={store}>
          <div id="app">
              <SearchFilters />
              <SearchResults />
          </div>
       </Provider>
  );
}
