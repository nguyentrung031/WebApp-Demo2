import actionType from '../consts/actionType';

var initialState = {
  itemsDetail: {},
  itemsSearch: []
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    //trang chi tiết tin tức
    case actionType.get_data_detail:
      return {
        ...state,
        itemsDetail: action.payloadDetail
      };
    // search data
    case actionType.search_data:
      return {
        ...state,
        itemsSearch: action.payloadSearch
      };
    default:
      return state;
  }
}

export default myReducer;
