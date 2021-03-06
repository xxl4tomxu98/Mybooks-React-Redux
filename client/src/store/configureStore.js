import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authentication from './authentication';
import book from './book';
import bookshelf from './bookshelf';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const reducer = combineReducers({
    authentication,
    book,
    bookshelf,
});

const storeEnhancer = composeEnhancers(applyMiddleware(thunk, logger));

const configureStore = initialState => {
    return createStore(
        reducer,
        initialState,
        storeEnhancer
    );
};


export default configureStore;
