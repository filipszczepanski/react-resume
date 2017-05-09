import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/';
import App from './App';
import './index.css';


function storage({ getState }) {
  return (next) => (action) => {
    let nextAction = next(action)
    // const resume = getState().resume.present
    return nextAction
  }
}

let store = createStore(reducers, compose(applyMiddleware(storage), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
