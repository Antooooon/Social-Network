import Store from './site/State/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import All from './all.js';
import {Provider} from "react-redux";


    ReactDOM.render(
        <Provider store={Store}>
        <All/>
        </Provider>
        , document.getElementById('root'));


