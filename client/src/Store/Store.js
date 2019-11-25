import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import List from './Reducer/List';
import TendencyReducer from './Reducer/TendencyReducer';
import StyleReducer from './Reducer/StyleReducer';
import Space_Reducer from './Reducer/Space_Reducer';
import PengShui_Reducer from './Reducer/PengShui_Reducer';
import Tips_Reducer from './Reducer/Tips_Reducer';
import Supplies_Reducer from './Reducer/Supplies_Reducer';
import StrangePoison_Reducer from './Reducer/StrangePoison_Reducer';
import Email_Reducer from './Reducer/Email_Reducer';
import thunk from 'redux-thunk';
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myReducer = combineReducers({
  List: List,
  Tendency: TendencyReducer,
  Style: StyleReducer,
  Space: Space_Reducer,
  PengShui: PengShui_Reducer,
  Tips: Tips_Reducer,
  Supplies: Supplies_Reducer,
  StrangePoison: StrangePoison_Reducer,
  Email: Email_Reducer
});

var store = createStore(
  myReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
// store.subscribe(function(){
//   console.log(JSON.stringify(store.getState()));
// })
export default store;