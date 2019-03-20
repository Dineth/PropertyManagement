import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store/configureStore';
import {getTenatData} from './actions/TenantActions';
import {getTenants} from './actions/TenantActions'
import AppContainer from './Components/Templates/AppContainer';
import 'bootstrap/dist/css/bootstrap.css';


const store = configureStore();
store.dispatch(getTenatData(initId));
store.dispatch(getTenants());


render (
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
)
