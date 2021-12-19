import {
    combineReducers,
    createStore,
    compose,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import usersReducer from './reducers/users';

const rootReducer = combineReducers({
    users: usersReducer
});

export type AppState = ReturnType<typeof rootReducer>;
const middleWares = [thunk];

const store = createStore(rootReducer, compose(
    applyMiddleware(...middleWares)
));

export default store; 