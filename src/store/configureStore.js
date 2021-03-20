import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import launchReducer from '../reducers/LaunchReducer';
import rocketReducer from '../reducers/RocketReducer';

const rootReducer = combineReducers({
  launchReducer,
  rocketReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store;
