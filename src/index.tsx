import React from 'react';
import {render} from 'react-dom';
import './style/index.scss';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {compose, createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/rootReducer";

// @ts-ignore
const {__REDUX_DEVTOOLS_EXTENSION__} = window;
const store = createStore(rootReducer, compose(
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
))

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
