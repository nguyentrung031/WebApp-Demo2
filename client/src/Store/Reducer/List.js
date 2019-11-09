import actionType from '../consts/actionType';

var initialState = {
  items: [],
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
        items: action.payloadStyle
      };
    case actionType.get_data_space:
      return {
        ...state,
        items: action.payloadSpace
      };
    default:
      return state;
  }
}

export default myReducer;
