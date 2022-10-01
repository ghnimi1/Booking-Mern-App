import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import { SearchContextProvider } from './context/SearchContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </SearchContextProvider>
);
