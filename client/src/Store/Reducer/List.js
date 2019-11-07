import actionType from '../consts/actionType';

var initialState = {
  items: []
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.get_data_tendency:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}

export default myReducer;