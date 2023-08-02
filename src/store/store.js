import { compose, applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import { mainReducer } from './mainReducer';

const ComposeEnhancer = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancer = ComposeEnhancer(applyMiddleware(reduxThunk));
export const store = createStore(mainReducer, composedEnhancer);
