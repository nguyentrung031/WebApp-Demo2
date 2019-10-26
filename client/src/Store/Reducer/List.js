import actionType from '../consts/actionType';

var initialState = {
  items: [],
  loading: false
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DATA:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case actionType.ITEMS_LOADING:
      return{
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default myReducer;