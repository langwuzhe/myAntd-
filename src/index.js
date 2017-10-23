// import React from 'react';
// import {render} from 'react-dom';
// import AppBS from './components/requireJS/AppBS';
{/*render(<AppBS />, document.getElementById("app"));*/}

// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import axios from 'axios';
//
// const initialState = {
//     fetching: false,
//     fetched: false,
//     users:[],
//     error: null,
// };
//
// const userReducer = (state = initialState, action) => {
//
//     switch (action.type) {
//         case 'FETCH_USERS_PENDING':
//             state = {...state, fetching: true};
//             break;
//         case 'FETCH_USERS_REJECTED':
//             state = {...state, fetching: false, fetched: false, error: action.payload};
//             break;
//         case 'FETCH_USERS_FULFILLED':
//             state = {
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 users: action.payload.data
//             };
//             break;
//     }
//
//     return state;
// };
//
// const fbReducer = (state=[], action) => {
//
//     return state;
// };
//
// const middleware = applyMiddleware(promise(), thunk, logger());
//
// const reducers = combineReducers({
//     user: userReducer,
//     fb: fbReducer,
// });
//
// const store = createStore(reducers, middleware);
//
// store.subscribe(() => {
//     console.log("store changed", store.getState())
// });
//
// store.dispatch({
//     type: 'FETCH_USERS',
//     payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
// });

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './components/redux/Store';
/*import ReduxGo from './components/redux/components/ReduxGo';
import App from './components/app';
import EditableTable from './components/EditableTable';
import SelectedTable from './components/SelectedTable';*/
import AntTest from './components/AntTest';

render(
    <Provider store={store}>
        <AntTest />
    </Provider>, document.getElementById("app"));

if (module.hot) {
    module.hot.accept();
}