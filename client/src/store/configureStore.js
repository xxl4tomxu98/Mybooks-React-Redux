import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authentication from './authentication';
import book from './book';
import bookshelf from './bookshelf';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const reducer = combineReducers({
    authentication,
    book,
    bookshelf,
});

const configureStore = initialState => {
    return createStore(
        reducer,
        initialState,
        storeEnhancer
    );
};

const storeEnhancer = composeEnhancers(applyMiddleware(thunk, logger));

export default configureStore;
