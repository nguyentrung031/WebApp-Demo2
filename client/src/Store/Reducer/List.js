import actionType from '../consts/actionType';

var initialState = {
  items: [],
  itemStyle: []
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.get_data_tendency:
      return {
        ...state,
        items: action.payload
      };
    case actionType.get_data_style:
      return {
        ...state,
        itemStyle: action.payloadStyle
      };
    default:
      return state;
  }
}

export default myReducer;
