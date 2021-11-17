import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import './styles/styles.scss';
import 'antd/dist/antd.css';

const store = configureStore();


const state  = store.getState()


const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
    
)


ReactDOM.render(jsx, document.getElementById('app'))
