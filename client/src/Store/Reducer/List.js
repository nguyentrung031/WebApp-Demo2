import actionType from '../consts/actionType';

var initialState = {
  itemsTendency: [],
  itemsStyle: [],
  itemsSpace: [],
  itemsPengShui: [],
  itemsTips: [],
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.get_data_tendency:
      return {
        ...state,
        itemsTendency: action.payload
      };
    case actionType.get_data_style:
      return {
        ...state,
        itemsStyle: action.payloadStyle
      };
    case actionType.get_data_space:
      return {
        ...state,
        itemsSpace: action.payloadSpace
      };
    case actionType.get_data_PengShui:
      return {
        ...state,
        itemsPengShui: action.payloadPengShui
      };
    case actionType.get_data_Tips:
      return {
        ...state,
        itemsTips: action.payloadTips
      };
    default:
      return state;
  }
}

export default myReducer;
