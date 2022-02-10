import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { userReducer } from './reducers/userReducer';

const initialState = {};
const middleware = [thunk];

// const reducer = combineReducers({
//     users: userReducer,
// });

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;