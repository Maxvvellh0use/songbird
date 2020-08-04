import React from 'react';
import { render } from 'react-dom';
import './style/index.scss';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { compose, createStore } from "redux";
import { Provider } from 'react-redux';
import { rootReducer } from "./redux/rootReducer";
import { initialState } from "./redux/reducers/nextCategoryBirdReducer";

const store = createStore(rootReducer, initialState)

const app: JSX.Element = (
    <Provider store={store}>
        <App />
    </Provider>
)

render (
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);
