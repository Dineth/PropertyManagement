import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/TenanstLeaseReducer';
import thunk from 'redux-thunk';

export default function studentConfigureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
