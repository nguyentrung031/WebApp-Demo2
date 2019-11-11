import actionType from '../consts/actionType';

var initialState = {
  itemsTendency: [],
  itemsStyle: [],
  itemsSpace: [],
  itemsPengShui: [],
  itemsTips: [],
  itemsSupplies: [],
  itemsSP: [],
  itemsDetail: {}
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    //trang xu hướng
    case actionType.get_data_tendency:
      return {
        ...state,
        itemsTendency: action.payload
      };
    // trang phong cách
    case actionType.get_data_style:
      return {
        ...state,
        itemsStyle: action.payloadStyle
      };
    //trang không gian
    case actionType.get_data_space:
      return {
        ...state,
        itemsSpace: action.payloadSpace
      };
    // trang phong thủy
    case actionType.get_data_PengShui:
      return {
        ...state,
        itemsPengShui: action.payloadPengShui
      };
    //trang mẹo vặt
    case actionType.get_data_Tips:
      return {
        ...state,
        itemsTips: action.payloadTips
      };
    //trang vật tư
    case actionType.get_data_Supplies:
      return {
        ...state,
        itemsSupplies: action.payloadSupplies
      };
    //trang độc lạ
    case actionType.get_data_StrangePoison:
      return {
        ...state,
        itemsSP: action.payloadSP
      };
    //trang chi tiết tin tức
    case actionType.get_data_detail:
      return {
        ...state,
        itemsDetail: action.payloadDetail
      };
    default:
      return state;
  }
}

export default myReducer;
