import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import rootSaga from './sagas';

import App from "./components/App/App";
import Weather from "./components/Weather/Weather"
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware=createSagaMiddleware();
const enhance = applyMiddleware(sagaMiddleware);
const store = createStore(reducer,enhance);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
    <Weather/>
  </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
