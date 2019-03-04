import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import symbol from './store/reducers/symbol';
import authReducer from './store/reducers/auth';
import topic from './store/reducers/topic';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/storage'; 

const config = {
    apiKey: "AIzaSyDmTTIZUKYF729ULIm7tpUYqiKQtiEASsc",
    authDomain: "forumpost-24969.firebaseapp.com",
    databaseURL: "https://forumpost-24969.firebaseio.com",
    projectId: "forumpost-24969",
    storageBucket: "forumpost-24969.appspot.com",
    messagingSenderId: "231952885510"
};

firebase.initializeApp(config);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    symbol: symbol,
    auth: authReducer,
    topic: topic
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store= {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render( app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
