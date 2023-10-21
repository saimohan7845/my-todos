import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './todoReducer';

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
