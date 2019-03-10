import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import GlobalStyles from "./styles/global";
import configureStore from "./store";
import App from './components/App/inedx';
import * as serviceWorker from './serviceWorker';

const renderApp=()=> {
    const store = configureStore({});
    if (process.env.NODE_ENV !== "production") {
        console.log("initial state ->");
        console.log(store.getState());
    }
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <GlobalStyles/>
                <App/>
            </div>
        </Provider>,
        document.getElementById("root"));
};

renderApp();
serviceWorker.register();
