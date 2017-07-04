import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

function _applyMiddlewear() {
    const middlewear = [

    ];

    return applyMiddleware(...middlewear);
}

export default function configureStore(initialState) {
    // store - it is object
   const store = compose(
       _applyMiddlewear()
   )(createStore)(rootReducer, initialState);

   return store;
}