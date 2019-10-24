import actionType from '../consts/actionType';

var initialState = {
  DATA: []
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DATA:
      return action.value.data;
    default:
      return state;
  }
}

export default myReducer;