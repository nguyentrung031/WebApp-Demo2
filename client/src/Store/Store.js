import { combineReducers } from 'redux';
import List from './Reducer/List'
var redux = require('redux');
const myReducer = combineReducers({
  List: List
});

var store = redux.createStore(myReducer);
// store.subscribe(function(){
//     console.log(JSON.stringify(store.getState()));
// })
export default store;