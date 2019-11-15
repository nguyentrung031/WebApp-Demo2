import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import List from './Reducer/List';
import thunk from 'redux-thunk';
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myReducer = combineReducers({
  List: List,
});

var store = createStore(
  myReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
// store.subscribe(function(){
//   console.log(JSON.stringify(store.getState()));
// })
export default store;